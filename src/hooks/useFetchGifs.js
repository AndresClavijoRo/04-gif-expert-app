
import { useEffect, useState } from 'react';
import { getGifs } from './../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImgages = async (category) => {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    };

    useEffect(() => {
        getImgages(category);
    }, [category]);


    return {
        images,
        isLoading,
    };
}
