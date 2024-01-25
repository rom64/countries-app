import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from "../components/List";
import { Card } from '../components/Card';

import {ALL_COUNTRIES} from "../config";
import {Controls} from "../components/Controls";


const HomePage = ({countries, setCountries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const handleSearch = (search, region) => {
        let data = [...countries];
        if(region) {
            data = data.filter(c => c.region.includes(region))
        }
        if(search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data);
    }
    const navigate = useNavigate();
    useEffect(() => {
        if(!countries.length)
            axios.get(ALL_COUNTRIES)
                .then(({data}) => setCountries(data))
        }, []);

    useEffect(() => {
        handleSearch();
    }, [countries]);
    return(
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map(item => {
                    const countryInfo = {
                        img: item.flags.png,
                        name: item.name,
                        info: [
                            {
                                title: 'Population',
                                description: item.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: item.region
                            },
                            {
                                title: 'Capital',
                                description: item.capital
                            },
                        ]
                    }
                    return (
                        <Card key={item.name}{...countryInfo} onClick={()=> navigate(`/country/${item.name}`)}/>
                    )

                })
                }
            </List>
        </>


    )
}
export { HomePage };