import { ReactStories } from "src/@types/story";

export const testConfig: ReactStories[] = [
  {
    id: 0,
    // title: "Story with title and img",
    frameStroke: "#4B246A",
    // side: 88,
    backgroundColor: "#4B246A",
    backgroundImage:
      "https://images.unsplash.com/photo-1602395714441-e4a5686cbb59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",

    stories: [
      {
        id: 0,
        media: {
          url:
            "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/ZLLZSQW/videoblocks-vertical-dynamic-slides_rwzdzfsmn__p__19e5b95605f18ae2e5a0333a6e9b90d0__P360.mp4",
          mediaType: "video",
        },
        duration: 50000,
      },
      {
        id: 1,
        media: {
          url:
            "https://images.unsplash.com/photo-1602395714441-e4a5686cbb59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          mediaType: "image",
        },
        duration: 50000,
      },
    ],
  },
  {
    id: 1,
    // title: "Another text, id",
    // style: {
    //   color: "white",
    // },
    frameStroke: "#BB60C3",
    //side: 88,
    backgroundColor: "#BB60C3",
    backgroundImage:
      "https://images.unsplash.com/photo-1602409049594-25f0d27dc2cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    stories: [
      {
        id: 2,
        media: {
          url:
            "https://images.unsplash.com/photo-1602409049594-25f0d27dc2cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          mediaType: "image",
        },
        duration: 50000,
      },
      {
        id: 3,
        media: {
          url:
            "https://images.unsplash.com/photo-1602387688969-82606117b9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          mediaType: "image",
        },
        duration: 50000,
      },
    ],
  },
  {
    id: 2,
    // title: "Weekly expenses",
    // style: {
    //   color: "white",
    // },
    frameStroke: "#8386FF",
    //side: 88,
    backgroundColor: "#8386FF",
    stories: [
      {
        id: 2,
        media: {
          url:
            "https://images.unsplash.com/photo-1603121560997-8ab5bf03ae36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          mediaType: "image",
        },
        duration: 50000,
      },
      {
        id: 3,
        media: {
          url:
            "https://images.unsplash.com/photo-1603182737247-6419d55c10bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          mediaType: "image",
        },
        duration: 50000,
      },
    ],
  },
  {
    id: 3,
    // title: "Weekly expenses",
    // style: {
    //   color: "white",
    // },
    frameStroke: "#8206AA",
    //side: 88,
    backgroundColor: "#8206AA",
    backgroundImage:
      "https://images.unsplash.com/photo-1602387688969-82606117b9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    stories: [
      {
        id: 2,
        media: {
          url:
            "https://images.unsplash.com/photo-1602535497779-205bd872bfaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
          mediaType: "image",
        },
        duration: 50000,
      },
      {
        id: 3,
        media: {
          url:
            "https://images.unsplash.com/photo-1601316185923-7706570d2376?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
          mediaType: "image",
        },
        duration: 50000,
      },
    ],
  },
];
