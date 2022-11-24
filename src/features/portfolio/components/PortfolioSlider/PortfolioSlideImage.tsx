const SlideImage = ({ img }: { img: string }) => {
  return (
    <div className="mb-4 max-w-96">
      <img
        src={img}
        alt=""
        className="rounded-lg"
        style={{ maxHeight: "50vh", margin: "auto" }}
      />
    </div>
  );
};

export default SlideImage;
