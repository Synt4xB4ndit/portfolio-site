'use client'

import { useState, useEffect } from 'react'

//the type

interface CoffeeShop {
    fsq_id: string
    name: string
    location: {
        formatted_address: string
    }
}

export default function NearbyCoffeeShops() {
    const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [location, setLocation] = useState<{lat: number; lng: number} | null>(null)

    //first key: fsq3E22dEkCZWgqkoS1fF+MirMBaA525a2uqfXaSaBw1Ou4=
    //back--up key : fsq3Ed5h9RpdSHrq/jDcxzUMCmYrFtgwx/xIxNNR3qNcUBw=
    const API_KEY = process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY

    useEffect(() => {
        if (!API_KEY) {
            setError('Foursquare API key is missing. Please configure')
            setLoading(false)
        }
    }, []

)






    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat:position.coords.latitude,
                        lng: position.coords.longitude,
                    })
                },

                (err) => {
                    setError('Failed to get your location. Please allow location access.')
                    setLoading(false)
                }

            )
        } else {
            setError('Geolocation is not supported by your browser')
            setLoading(false)
        }

    }, 
    [])

// when location is available, fetch location

useEffect(() => {
    if (!location || !API_KEY) return
    const fetchCoffeeShops = async () => {
        try {
            const url =`https://api.foursquare.com/v3/places/search?ll=${location.lat},
               ${location.lng}&radius=5000&categories=13032&limit=5`
            //  console.log('fetching from:', url)
             //  console.log('Using API Key:', API_KEY)


            const response = await fetch(url,
               {
                method: 'GET',
                headers: {
                   'Authorization': API_KEY,
                    'Accept': 'application.json',
                   // 'Host': 'api.foursquare.com'

                },   
                          }
            )

            if (!response.ok) {
                throw new Error('Failed to fetch coffee shops')
            }

            const data = await response.json()
            const shops: CoffeeShop[] = 
            data.results.map((place: any) => ({
                    fsq_id: place.fsq_id,
                    name: place.name,
                    location: {
                        formatted_address: place.location.formatted_address 
                        || 'Address not available'
                    }
            }))
                setCoffeeShops(shops)
                setLoading(false)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occured')
            setLoading(false) }
        }

        fetchCoffeeShops()
        }, [location, API_KEY])
    
        if (loading) {
            return (
                <div className="text-center py-8">
                    <p className="text-gray-600">
                        Loading something sweet...
                    </p>
                </div>
            )
        }

        if (error) {
            return (
                <div className="text-center py-8">
                    <p className="text-red-500">Error:{error}</p>
                </div>
            )
        }

        return (
            <div className="mt-12">
                <h2 className="text-2xl font-bold
                text-gray-900 mb-6 text-center">
                    Nearby Coffee Shops
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-5 gap-6">
                    {coffeeShops.map((shop) => (
                        <div
                        key={shop.fsq_id}
                        className="bg-white p-4 rounded-xl
                        shadow-md hover:shadow-lg transition-shadow
                        duration-300">
                            <h3 className="text-lg font-semibold text-gray-800
                            mb-2">{shop.name}</h3>
                            <p className="text-gray-600 
                            text-sm">{shop.location.formatted_address}</p>
                            </div>
                    ))}
                </div>
            </div>
        )
    
    }