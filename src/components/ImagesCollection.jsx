import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useParams, useNavigate } from 'react-router-dom';


const mainNavigation = {
  1: "biermann",
  2: "vollkontakt",
  3: "fremde",
  4: "diarySecond",
  5: "portraits",
  6: "covid",
  7: "guter",
  8: "zeit",
  9: "diaryFirst"
}

const projects = {
  biermann: {
    title: "Oli",
    subpath: "Moser_Oli-",
    quantity: 19,
  },
  covid: {
    title: "Covid homes",
    subpath: "Home-",
    quantity: 12,
  },
  diaryFirst: {
    title: "Diary",
    subpath: "Web-",
    quantity: 15,
  },
  diarySecond: {
    title: "Diary",
    subpath: "Web-",
    quantity: 15,
  },
  fremde: {
    title: "Fremde betten",
    subpath: "shelter-",
    quantity: 26,
  },
  guter: {
    title: "24h güter",
    subpath: 'freight-',
    quantity: 22,
  },
  main: {
    title: "something here",
    subpath: 'main-',
    quantity: 9,
  },
  portraits: {
    title: "Portraits",
    subpath: "Web-",
    quantity: 3,
  },
  vollkontakt: {
    title: "Vollkontakt",
    subpath: "Kontakt-",
    quantity: 17,
  },
  zeit: {
    title: "Zeit Online",
    subpath: "Zeit-",
    quantity: 5,
  }
}

export const ImagesCollection = () => {
  const { project } = useParams();
  const navigate = useNavigate();
  const [smoothRender, setsmoothRender] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setsmoothRender(false), 20);
  }, [project]);

  const imagesList = [...new Array(projects[project].quantity)].map((number, index) =>
    `/images/${project}/${projects[project].subpath}${index + 1}.jpg`)

  return (
    <div className="py-4">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="50px">
          {
            imagesList.map((imgUrl, index) => {
              if (project !== "main") {
                return (
                  <div style={{
                    opacity: smoothRender ? 0 : 1,
                    transition: "all 1s",
                    transform: "scale(1.04) rotate(0.01deg)",
                  }}>
                    <img
                      src={imgUrl}
                      style={{
                        height: 'auto',
                        width: '100%'
                      }}
                      alt="collection"
                      key={index}
                    />
                  </div>
                )
              } else {
                return (
                  <div style={{
                    opacity: smoothRender ? 0 : 1,
                    transition: "all 1.5s",
                    cursor: "pointer",
                  }}>
                    <img
                      style={{
                        height: 'auto',
                        width: '100%'
                      }}
                      src={imgUrl}
                      onClick={() => {
                        navigate(`/projects/${mainNavigation[index + 1]}`);
                      }}
                      alt="collection"
                      key={index}
                      className="img-hover"
                    />
                    <p>{mainNavigation[index + 1]}</p>
                  </div>
                )
              }
            })
          }
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
};
