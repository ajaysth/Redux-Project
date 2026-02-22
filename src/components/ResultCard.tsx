
interface ItemProps {
    id: number,
    type: string,
    title: string,
    thumbnail: string,
    url: string
}
interface Props {
    item: ItemProps
}
const ResultCard = ({ item }: Props) => {
    const addToCollection = (item: ItemProps) => {
        const olddata = JSON.parse(localStorage.getItem("collection") || "[]");
        const newdata = [...olddata, item]
        localStorage.setItem("collection", JSON.stringify(newdata))
        console.log(newdata);


    }
    return (
        <div className=" cursor-pointer group relative w-80 h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-900">

            {/* MEDIA */}
            <div className="w-full h-full overflow-hidden">
                {item.type === "photo" && (
                    <img
                        src={item.url}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}

                {item.type === "video" && (
                    <video
                        src={item.url}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}

                {item.type === "gif" && (
                    <img
                        src={item.url}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* TITLE */}
            <div className="flex justify-between absolute bottom-0 p-4">
                <h2 className="text-white font-semibold text-lg line-clamp-2">
                    {item.title}
                </h2>
                <button onClick={() => { addToCollection(item) }} className="m-2 active:scale-95 px-4 py-1 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    Save
                </button>
            </div>

        </div>
    )
}

export default ResultCard