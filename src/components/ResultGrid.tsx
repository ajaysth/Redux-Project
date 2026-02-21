import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi"
import { useEffect } from "react";
import { setError, setLoading, setResults } from "../redux/feature/searchSlice";

type Photo = {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        full: string;
    };
};

type VideoItem = {
    id: number;
    user: {
        name: string;
    };
    image: string;           // thumbnail
    video_files: VideoFile[];
};

type VideoFile = {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    link: string;
};


type FileType = {
    url: string;
};

type FileSize = {
    gif: FileType;
    jpg: FileType;
    mp4: FileType;
    webm: FileType;
    webp: FileType;
};

type GifFile = {
    hd: FileSize;
    md?: FileSize;
    sm?: FileSize;
};

type GifItem = {
    blur_preview: string;
    file: GifFile;
    title: string;
    id: string;
};

const ResultGrid = () => {
    const { query, loading, error, results, activeTab } = useSelector((store: RootState) => store.search)

    const dispatch = useDispatch()





    useEffect(() => {
        const getData = async () => {
            if (!query) return
            let data = [];

            try {
                dispatch(setLoading())
                if (activeTab == "photos") {
                    const response = await fetchPhotos(query);
                    data = response.results.map((item: Photo) => ({
                        id: item.id,
                        type: "photo",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        url: item.urls.full

                    }))
                }
                if (activeTab == "videos") {
                    const response = await fetchVideos(query);
                    data = response.videos.map((item: VideoItem) => ({
                        id: item.id,
                        type: "video",
                        title: item.user.name,
                        thumbnail: item.image,
                        url: item.video_files[0]
                    }))
                }
                if (activeTab == "gifs") {
                    const response = await fetchGifs(query);
                    data = response.data.data.map((item: GifItem) => ({
                        id: item.id,
                        type: "gif",
                        title: item.title,
                        thumbnail: item.blur_preview,
                        url: item.file.hd.gif.url
                    }))
                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err))
            }


        }
        getData();

    }, [activeTab, query])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading.....</h1>



    return (
        <div>
            {results.map((item, id) => {
                return <h1 key={id}>{item.title}</h1>
            })}

        </div>
    )
}

export default ResultGrid