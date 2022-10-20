import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Iphone(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('asus');
    const [hotAsus, setHotAsus] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotAsus(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale asus">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotAsus ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotAsus)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Iphone;