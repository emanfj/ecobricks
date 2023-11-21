import React, {useState} from 'react';
import './Story.css';

const Story = () => {
    const [state, setState] = useState({
      name: '',
      isEditing: false,
    });
    
    return (
        <div class="story">
        <div class="title_textbox">
            <div class="dot1"></div>
            <div class="ourstory">Our Story</div>
            <div class="dot2"></div>
        </div>
        <div class="story_of_company">blas blas blas</div>
        <div class="ellipse"></div>
        <div class="ellipse4"></div>
        <div class="ellipse3"></div>
    </div>
    )
}

export default Story;