import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/itemList/ItemList';
import Greeting from './Greeting';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';
import Loading from '../components/loading/Loading';
import Explica from '../components/explica/Explica';

export default function ItemPromise() {
   
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true); //tiene que ser un dato boleano
    const { categoriaId } = useParams();

   

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
                .then((resp) =>
                    setProducto(
                        resp.docs.map((obj) => ({ id: obj.id, ...obj.data() }))
                    )
                )
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
            <div className='contenedor-card'>
                <Explica/>
                <Greeting saludo={'Productos'} />
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
