import { ComponentStyle } from "src/@types/style"

export const UserStatsBottomBarStyles: ComponentStyle<"story-content"> = {
  "user-stats-bottom-bar": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    backgroundColor: "black",
    borderRadius: "4px",
  },
}

// .stories-bottom-bar {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   padding: 8px 16px 0;
//   .nativeBottomHeightWithFallback(padding-bottom, 8px);
//   background-color: @color_vantablack;

//   .sbb_rate {
//     line-height: 0;
//   }

//   .sbb_like-icon {
//     margin-right: 24px;
//   }

//   .sbb_icon {
//     fill: @color_quartz;
//     stroke: @color_quartz;

//     &-active {
//       fill: @color_primary;
//       stroke: @color_primary;
//     }
//   }
// }
