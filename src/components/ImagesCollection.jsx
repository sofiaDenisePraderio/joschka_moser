import React, { useEffect, useState, useRef } from 'react';
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

const mainTitle = {
  1: "Biermann",
  2: "Vollkontakt",
  3: "Fremde betten",
  4: "Diary 2",
  5: "Portraits",
  6: "Covid homes",
  7: "24h güter",
  8: "Zeit Online",
  9: "Diary 1"
}

const projects = {
  biermann: {
    subpath: "Moser_Oli-",
    quantity: 19,
  },
  covid: {
    subpath: "Home-",
    quantity: 12,
  },
  diaryFirst: {
    subpath: "Web-",
    quantity: 15,
  },
  diarySecond: {
    subpath: "Web-",
    quantity: 15,
  },
  fremde: {
    subpath: "shelter-",
    quantity: 26,
  },
  guter: {
    subpath: 'freight-',
    quantity: 22,
  },
  main: {
    subpath: 'main-',
    quantity: 9,
  },
  portraits: {
    subpath: "Web-",
    quantity: 3,
  },
  vollkontakt: {
    subpath: "Kontakt-",
    quantity: 17,
  },
  zeit: {
    subpath: "Zeit-",
    quantity: 5,
  }
}

export const ImagesCollection = () => {
  const { project } = useParams();
  const navigate = useNavigate();
  const [smoothRender, setsmoothRender] = useState(true);

  console.log('project', project)

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setsmoothRender(false), 150);
    console.log('useEffect')
  }, [project]);

  const imagesList = [...new Array(projects[project].quantity)].map((number, index) =>
    `/joschka_moser/images/${project}/${projects[project].subpath}${index + 1}.jpg`)

  // const [loading, setLoading] = useState(true);
  // console.log(loading, 'loading')
  const counter = useRef(0);
  // const imageLoaded = () => {
  //   counter.current += 1;
  //   if (counter.current >= imagesList.length) {
  //     setLoading(false);
  //   }
  // }

  return (
    <>
      {/* <div style={{ display: loading ? "block" : "none" }}>
        ...
      </div> */}
      <div className="py-4"
        style={{
          // display: loading ? "none" : "block",
          opacity: smoothRender ? 0 : 1,
          transition: "all 1.5s",
        }}>
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
                      transition: "all 1.5s",
                      transform: "scale(1.04) rotate(0.01deg)",
                    }}>
                      <img
                        loading="lazy"
                        // onLoad={imageLoaded}
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
                    <div className="example" style={{
                      opacity: smoothRender ? 0 : 1,
                      transition: "all 1.5s",
                      cursor: "pointer",
                    }}
                      onClick={() => {
                        navigate(`/projects/${mainNavigation[index + 1]}`);
                      }}
                    >
                      <img
                        loading="lazy"
                        // onLoad={imageLoaded}
                        style={{
                          height: 'auto',
                          width: '100%'
                        }}
                        src={imgUrl}
                        alt="collection"
                        key={index}
                        className="img-hover"
                      />
                      <div className="content">
                        <p className="text">{mainTitle[index + 1]}</p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  )
};
