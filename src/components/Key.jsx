import { useState, useEffect } from "react";

const Key = ({note, id, sound}) => {

    const [keyPressed, setKeyPressed] = useState(false);
    const [audio] = useState(new Audio(sound));
    const [playing, setPlaying] = useState(false);


    function useKeyPress() {

        useEffect(() => {
            playing ? audio.play() : audio.load();
            },
            [playing]
        );

        useEffect(() => {
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
              audio.removeEventListener('ended', () => setPlaying(false));
            };
        }, []);

        // If pressed key is our target key then set to true
        const downHandler = ({ key }) => {
          if (key === note) {
            setKeyPressed(true);
            setPlaying(true);
          }
        };
        // If released key is our target key then set to false
        const upHandler = ({ key }) => {
          if (key === note) {
            setKeyPressed(false);
            setPlaying(false);
          }
        };

        const MouseDown = () => {
            setKeyPressed(true);
            setPlaying(true);
        };

        const MouseUp = () => {
            setKeyPressed(false);
            setPlaying(false);
        };
        // Add event listeners
        useEffect(() => {
          window.addEventListener("keydown", downHandler);
          window.addEventListener("keyup", upHandler);
          document.getElementById(id).addEventListener("mouseup", MouseUp);
          document.getElementById(id).addEventListener("mousedown", MouseDown);
          // Remove event listeners on cleanup
          return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
            document.getElementById(id).addEventListener("mouseup", MouseUp);
            document.getElementById(id).addEventListener("mousedown", MouseDown);
          };
        }, []); // Empty array ensures that effect is only run on mount and unmount
        return keyPressed;
    }

    const pressed = useKeyPress();
    
    const flatNotes = ['w', 'e', 't', 'y', 'u'];
    const validNote = () => {
        return !flatNotes.includes(note);
    }

    return (
        <button id={id} className={`key ${!validNote() ? "key-flat" : ""} ${pressed ? "pressed" : ""}`}>
          <p>{note}</p>
        </button>
    );
}

export default Key;