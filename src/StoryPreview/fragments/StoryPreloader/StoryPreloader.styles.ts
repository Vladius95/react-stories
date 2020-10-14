import { ComponentStyle } from "src/@types/style";

export const StoryPreloaderStyles: ComponentStyle<"stories-preloader"> = {
  "stories-preloader": {
    display: "flex",
  },
};

// .stories-preloader {
//   display: flex;
//   // отступ 16px + padding для каемки в Stories в 6px
//   padding: 0 22px;

//   overflow-x: auto;

//   @media screen and (max-width: 768px) {
//     &::-webkit-scrollbar {
//       display: none;
//     }
//   }

//   .sp_element {
//     flex: none;

//     width: 88px;
//     height: 88px;
//     border-radius: 8px;

//     &:not(:last-child) {
//       margin-right: 16px;
//     }
//   }
// }
