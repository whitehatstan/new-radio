import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000", // Цвет фона (черный)
        },
        fpsLimit: 60, // Ограничение FPS
        interactivity: {
          events: {
            onClick: {
              enable: true, // Включить взаимодействие по клику
              mode: "push", // Режим "push" (добавляет частицы)
            },
            onHover: {
              enable: true, // Включить взаимодействие при наведении
              mode: "repulse", // Режим "repulse" (отталкивает частицы)
            },
          },
          modes: {
            push: {
              quantity: 4, // Количество частиц при клике
            },
            repulse: {
              distance: 100, // Дистанция отталкивания
              duration: 0.4, // Длительность эффекта
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Цвет частиц (белый)
          },
          links: {
            color: "#ffffff", // Цвет связей между частицами
            distance: 150, // Максимальная дистанция связи
            enable: true, // Включить связи
            opacity: 0.5, // Прозрачность связей
            width: 1, // Толщина связей
          },
          collisions: {
            enable: true, // Включить столкновения частиц
          },
          move: {
            direction: "none", // Направление движения
            enable: true, // Включить движение
            outModes: {
              default: "bounce", // Поведение при выходе за границы
            },
            random: false, // Случайное движение
            speed: 2, // Скорость движения
            straight: false, // Движение по прямой
          },
          number: {
            density: {
              enable: true, // Включить плотность
              area: 800, // Область, в которой частицы распределены
            },
            value: 80, // Количество частиц
          },
          opacity: {
            value: 0.5, // Прозрачность частиц
          },
          shape: {
            type: "circle", // Форма частиц (круг)
          },
          size: {
            value: { min: 1, max: 3 }, // Размер частиц
          },
        },
        detectRetina: true, // Поддержка Retina-дисплеев
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Отправляем частицы на задний план
      }}
    />
  );
};

export default ParticlesBackground;
// import React, { useEffect } from "react";
// import Particles from "particles.js";

// const ParticlesBackground = () => {
//   useEffect(() => {
//     window.particlesJS.load("particles-js", "/particles.json", () => {
//       console.log("Particles loaded!");
//     });
//   }, []);

//   return <div id="particles-js" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
// };

// export default ParticlesBackground;

// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const particlesInit = async (main) => {
//     // Инициализация tsparticles
//     await loadFull(main);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: {
//             value: "#000000", // Цвет фона (черный)
//           },
//         },
//         fpsLimit: 60, // Ограничение FPS
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true, // Включить взаимодействие по клику
//               mode: "push", // Режим "push" (добавляет частицы)
//             },
//             onHover: {
//               enable: true, // Включить взаимодействие при наведении
//               mode: "repulse", // Режим "repulse" (отталкивает частицы)
//             },
//           },
//           modes: {
//             push: {
//               quantity: 4, // Количество частиц при клике
//             },
//             repulse: {
//               distance: 100, // Дистанция отталкивания
//               duration: 0.4, // Длительность эффекта
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff", // Цвет частиц (белый)
//           },
//           links: {
//             color: "#ffffff", // Цвет связей между частицами
//             distance: 150, // Максимальная дистанция связи
//             enable: true, // Включить связи
//             opacity: 0.5, // Прозрачность связей
//             width: 1, // Толщина связей
//           },
//           collisions: {
//             enable: true, // Включить столкновения частиц
//           },
//           move: {
//             direction: "none", // Направление движения
//             enable: true, // Включить движение
//             outModes: {
//               default: "bounce", // Поведение при выходе за границы
//             },
//             random: false, // Случайное движение
//             speed: 2, // Скорость движения
//             straight: false, // Движение по прямой
//           },
//           number: {
//             density: {
//               enable: true, // Включить плотность
//               area: 800, // Область, в которой частицы распределены
//             },
//             value: 80, // Количество частиц
//           },
//           opacity: {
//             value: 0.5, // Прозрачность частиц
//           },
//           shape: {
//             type: "circle", // Форма частиц (круг)
//           },
//           size: {
//             value: { min: 1, max: 3 }, // Размер частиц
//           },
//         },
//         detectRetina: true, // Поддержка Retina-дисплеев
//       }}
//     />
//   );
// };

// export default ParticlesBackground;