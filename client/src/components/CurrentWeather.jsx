import React from "react";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

function CurrentWeather() {
    // USER
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [isInfo, setIsInfo] = useState(false)

    // RESPONSE
    const [weather, setWeather] = useState()


    async function essa() {
        try {
            const response = await fetch(`http://localhost:3000/currentWeather?city=${city}`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
            if (response.ok) {
                const data = await response.json()
                setWeather(data)
                setIsInfo(true)
            }
        } catch (error) {
            console.log("chuj")
        }
    }


    return (
        <div className="w-1/3 flex flex-col items-center justify-center h-full">
            <fieldset className="border-4 rounded-xl p-8 border-blue-400 h-3/4 w-3/4">
                <legend className="text-xl text-blue-400 font-bold px-2"> Check weather for your city</legend>
                <div className="h-4/5">
                    {(isInfo) ? (
                        <div>
                            <ul className="flex flex-col">
                                <li>
                                    Description: {weather[0]}
                                </li>
                                <li>
                                    Temperature: {weather[1].temp}
                                </li>
                                <li>
                                    Temperature (feels like): {weather[1].feels_like}
                                </li>
                                <li>
                                    Max temp = {weather[1].temp_max}
                                </li>
                                <li>
                                    Min temp = {weather[1].temp_min}
                                </li>
                                <li>
                                    Pressure = {weather[1].pressure} hPa
                                </li>
                                <li>
                                    Humidity = {weather[1].humidity}
                                </li>
                                <li>
                                    Wind speed = {weather[2].speed} m/s
                                </li>
                                <li>
                                    Clouds = {weather[3]}%
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <h1> Enter your city in search panel under</h1>
                    )}
                </div>
                <div className="w-full h-1/5 border-t-4 border-t-blue-400">
                    <div className="flex flex-row w-full h-full gap-4 items-center ">
                        <div className="flex flex-col w-4/5 gap-3">
                            <Input label="City" onChange={(e) => setCity(e.target.value)} />
                            <Input label="Country" onChange={(e) => setCountry(e.target.value)} />
                        </div>
                        <button className="w-1/5 h-2/3 bg-blue-400 flex flex-col justify-center items-center rounded-xl font-bold text-white" onClick={essa}> :D </button>
                    </div>
                </div>
            </fieldset >
        </div >
    )
}

export default CurrentWeather;