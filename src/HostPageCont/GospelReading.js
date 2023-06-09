import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Gospel from './TextFiles/Gospel.txt'
import './GospelStyle.css'
import FooterSection from './Footer';

export default function FileReaderExample() {
  const [fileContent, setFileContent] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Gospel); 
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const dateValue = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' });

  return (
    <div className='body-component'>
      <div className='panel--text'>
        <h1>Gospel of the Day: {dateValue}</h1>
        <p dangerouslySetInnerHTML={{ __html: fileContent }} />
          <div>
            <br />
            <Link to="/" className="return-button">
              <button type="button">
                <strong>Back</strong>
              </button>
            </Link>
          </div>
      </div>
      <div className='info-container--name'></div>
      <Outlet />
      <FooterSection />
    </div>
  );
}
