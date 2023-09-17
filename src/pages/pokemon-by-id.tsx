import {Typography,Grid,Box} from '@mui/material'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import pokemomData from './../assets/pokedex.json'

const PokemonById =()=>{
const params =useParams()
const [pokemon,setPokemon]=useState<any|null>(null)
const pokemonList =pokemomData
useEffect(()=>{
if(!pokemon){
    let poke =pokemonList.filter((row)=>`${row?.id}`===`${params?.pokemonId}`)
    if(poke.length !==0){

        setPokemon(poke[0])
    }
}
})

return(
    <>
    <Typography variant='h3'>
        Pokemon Details
    </Typography>
    <Grid container sx={{width:'100%',height:"100vh"}}>
        <Grid item md={4} sx={{}}>
            <Box component={'img'}
            sx={{width:'300px', height:'300px'}}
            src={`${pokemon?.image.hires}`}
             alt="pokemon-image"/>
        </Grid>
        <Grid item md={8} sx={{}}>
            <Typography>
                name:{pokemon?.name?.english}
            </Typography>
            <Typography>
                name:{pokemon?.name?.japanese}
            </Typography>
            </Grid>
    </Grid>
    </>
)
}
export default PokemonById