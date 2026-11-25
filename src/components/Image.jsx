function Image({ imageURL, imageTitle }) {
  return (
    <div className="my-2 w-full">
      <img className="w-full h-auto rounded-md" src={imageURL} width="200px" alt={imageTitle} />
      <div className="flex justify-center mt-4 text-base">Title: {imageTitle}</div>
    </div>
  )
}

export default Image;