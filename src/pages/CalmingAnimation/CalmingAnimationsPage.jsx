import React from 'react';
import './CalmingAnimation.css'

function CalmingAnimationsPage() {
  const calmingAnimations = [
    {
      id: 1,
      title: "Oddly satisfying loading indicator",
      description: "Loading Indicator is a visually mesmerizing animation crafted to delight users, offering a calming and aesthetically pleasing experience while content loads.",
      animationURL: "https://codepen.io/eight/embed/LyrPXJ?height=600&default-tab=result&embed-version=2#result-box://www.youtube.com/watch?embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F&source_ve_path=MTY0OTksMTM5MTE3LDI4NjY0LDE2NDUwNg&feature=emb_share&v=Mb3ji6fvzEk://your-animation-api.com/ripple-anihttps://www.youtube.com/watch?v=Mb3ji6fvzEkmation",
    },
    {
      id: 2,
      title: "Mesmerizing",
      description: "Immerse in a captivating journey through mesmerizing landscapes and soothing visual symphonies.",
      animationURL: "https://codepen.io/xposedbones/embed/aOrQVy?height=600&default-tab=result&embed-version=2#result-box", 
    },
    {
      id: 3,
      title: "The Last Experience ",
      description: "The Last Experience: Immerse in a surreal journey through serene landscapes and ambient soundscapes.",
      animationURL: "https://codepen.io/byteknight/embed/XeVBbb?height=600&default-tab=result&embed-version=2#result-box", 
    },
    {
      id: 4,
      title: "Campfire",
      description: "Cozy campfire scene with crackling flames illuminating a serene night.",
      animationURL: "https://codepen.io/byteknight/embed/VMyBwb?height=600&default-tab=result&embed-version=2#result-box",
    },
    {
      id: 5,
      title: "Growing pastel dots",
      description: "Immerse in a serene display of growing pastel dots for tranquil relaxation.",
      animationURL: "https://codepen.io/rachsmith/embed/eNgvvx?height=600&default-tab=result&embed-version=2#result-box", 
    },
    {
      id:6,
      title: "Animation Test ",
      description: "Immerse in a tranquil visual journey with serene landscapes and soothing colors.",
      animationURL: "https://codepen.io/xposedbones/embed/VgrmpE?height=600&default-tab=result&embed-version=2#result-box", 
    },
  ];

  return (
    <div>
      <div className="calming-animations-container">
      <h1>Calming Animations</h1>
        {calmingAnimations.map((animation) => (
          <div key={animation.id} className="calming-animation">
            <h2>{animation.title}</h2>
            <p>{animation.description}</p>
            <div className="animation">
              <iframe
                src={animation.animationURL}
                title={animation.title}
                width="50%"
                height="550"
                className="animation-frame"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalmingAnimationsPage;
