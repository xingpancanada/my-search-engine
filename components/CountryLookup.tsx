'use client'

import { useEffect, useState } from "react"

export default function CountryLookup() {
  const [country, setCountry] = useState("");
  
  useEffect(() => {
    fetch("https://ipapi.co/json/").then(resp => resp.json()).then(data => setCountry(data.country_name));
  }, []);

  return (
    <div>{country}</div>
  )
}
