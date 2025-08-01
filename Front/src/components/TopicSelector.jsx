import React, { useState, useEffect, useRef } from 'react';
import topicList from '../data/topicList.js';
import '../css/TopicSelector.css';

function TopicSelector({ selectedTopic: externalSelected, setSelectedTopic: externalSetSelected }) {
  const topics = Object.keys(topicList);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [internalSelected, setInternalSelected] = useState(null);

  const selectedTopic = externalSelected !== undefined ? externalSelected : internalSelected;
  const setSelectedTopic = externalSetSelected !== undefined ? externalSetSelected : setInternalSelected;

  const [buttonWidth, setButtonWidth] = useState(0);
  const intervalRef = useRef(null);
  const wrapperRef = useRef(null);

  const visibleTopics = 8;
  const topicButtonGap = 16;
  const maxIndex = topics.length > visibleTopics ? topics.length - visibleTopics : 0;

  useEffect(() => {
    const calculateButtonWidth = () => {
      if (wrapperRef.current) {
        const wrapperWidth = wrapperRef.current.offsetWidth;
        const newButtonWidth = (wrapperWidth - (topicButtonGap * (visibleTopics - 1))) / visibleTopics;
        setButtonWidth(newButtonWidth);
      }
    };

    calculateButtonWidth();
    window.addEventListener('resize', calculateButtonWidth);

    return () => window.removeEventListener('resize', calculateButtonWidth);
  }, []);

  useEffect(() => {
    clearInterval(intervalRef.current);

    if (selectedTopic === null && topics.length > visibleTopics) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
      }, 10000);
    }

    return () => clearInterval(intervalRef.current);
  }, [selectedTopic, topics.length, maxIndex]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(prev => (prev === topic ? null : topic));
  };

  const scrollAmount = buttonWidth + topicButtonGap;

  return (

    <div className="topic-selector-wrapper" ref={wrapperRef}>
      <h1 className="mb-2 fw-bold mt-4">Collect by Topic</h1>
      <div
        className="topic-selector"
        style={{ transform: `translateX(-${currentIndex * scrollAmount}px)` }}
      >
        {topics.map((topic) => {
          const [emoji, ...nameParts] = topic.split(' ');
          const name = nameParts.join(' ');
          return (
            <button
              key={topic}
              className={`topic-button ${selectedTopic === topic ? 'selected' : ''}`}
              onClick={() => handleTopicClick(topic)}
              style={{ width: `${buttonWidth}px` }}
            >
              <span className="topic-emoji">{emoji}</span>
              <span className="topic-name">{name}</span>
            </button>
          );
        })}
      </div>
      {selectedTopic === null && (
        <div className="select-guide-text">Choose a topic you're interested in!</div>
      )}
    </div>
  );
}

export default TopicSelector;
