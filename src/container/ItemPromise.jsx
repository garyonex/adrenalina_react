import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/itemList/ItemList';
import { getFetch } from '../helpers/getFetch';
import Greeting from './Greeting';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';
import Loading from '../components/loading/Loading';

export default function ItemPromise() {
    //const [muestra, setMuestra] = useState([])// el array vacio es para iniciarlo
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true); //tiene que ser un dato boleano
    const { categoriaId } = useParams();

    // TODO useEffect(() => {
    // if (categoriaId)
    //     getFetch // llamada a la api
    //     .then((resp)=>{
    //         setMuestra(resp.filter(pro => pro.categoria === categoriaId));
    //     })
    //     .catch((error=>
    //         console.log('Existe un error', error)
    //         ))
    //         .finally(()=>{
    //             setLoading(false);
    //         })
    // }else{

    //     getFetch // llamada a la api
    //     .then((resp)=>{
    //         setMuestra(resp);
    //     })
    //     .catch((error=>
    //         console.log('Existe un error', error)
    //         ))
    //         .finally(()=>{
    //             setLoading(false);
    //         })
    //         }

    //! INICIANDO EL FIREBASE / una sola
    // useEffect(()=>{
    //     const db= getFirestore()
    //     //de donde se extrae / coleccion / ID's
    //     const queryDb= doc(db, 'productos' , 'w0thB93jkaywiwkIoCWN')
    //     getDoc(queryDb)
    //     .then(resp =>setProducto({id:resp.id, ...resp.data()}))
    // },[])

    // INICIANDO FIREBASE / TODAS
    // useEffect(() => {
    //   const db = getFirestore()
    //   const queryColection = collection(db, 'productos',)
    //   getDocs(queryColection)
    //   .then(resp=> setProducto(resp.docs.map(obj => ( { id: obj.id, ...obj.data()}))))
    //      .catch(err=>console.log(err))
    //      .finally(()=>setLoading(false))
    // }, [])

    //FILTRADO
    useEffect(() => {
        const db = getFirestore();
        if (categoriaId) {
            const queryColection = collection(db, 'productos');
            const queryFilter = query(
                queryColection,
                where('categoria', '==', categoriaId)
            );
            getDocs(queryFilter)
                .then(resp=> setProducto(resp.docs.map(obj => ( { id: obj.id, ...obj.data()}))))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            const queryColection = collection(db, 'productos');
            getDocs(queryColection)
                .then((resp) =>
                    setProducto(
                        resp.docs.map((item) => ({
                            id: item.id,
                            ...item.data(),
                        }))
                    )
                )
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }
    }, [categoriaId]);

    return (
        <div>
            <Greeting saludo={'Productos'} />
            <div className='contenedor-card'>
                {loading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <div className='contenedor-productos'>

                        <ItemList muestra={producto} />
                    </div>
                )}
            </div>
        </div>
    );
}
