import { UseImagenStore } from "../storeZustando";

export default function CardImage() {
  // Acceder a las imágenes desde el store
  const imagen = UseImagenStore((state) => state.hits);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {imagen.length > 0 ? (
        imagen.map((img) => (
          <div key={img.largeImageURL} className="border p-2 rounded shadow">
            <img
              src={img.previewURL}
              alt="Preview"
              className="w-full h-auto rounded"
            />
            <p className="mt-2 font-bold text-gray-700">Likes: {img.likes}</p>
            <p className="text-sm text-gray-500">Views: {img.views}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No hay imágenes para mostrar</p>
      )}
    </div>
  );
}
