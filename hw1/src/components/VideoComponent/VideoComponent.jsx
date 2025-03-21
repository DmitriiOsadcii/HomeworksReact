export const VideoComponent = () => {
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zajUgQLviwk?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};
