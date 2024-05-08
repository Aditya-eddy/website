import BunnyImage from "@/public/images/community-bunny.png";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import thumbNail from "@/public/images/demo-thumbnail-bg.png";
import captureRelay from "@/public/images/CaptureAndReplay.json"
export const DummyData = [
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 1 text",
    Slug: "webstory-1",
    Story: [
      {
        imageUrl: thumbNail,
        Heading: "Story 1",
        text: "this is text-1",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story1",
        image: true,
      },
    ],
    Categories: ["cat-1", "cat2"],
  },
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 1 text",
    Slug: "webstory-1",
    Story: [
      {
        imageUrl: BunnyImage,
        Heading: "Story 1",
        text: "this is text-1",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story1",
        image: true,
      },
    ],
    Categories: ["cat-1", "cat2"],
  },
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 1 text",
    Slug: "webstory-1",
    Story: [
      {
        imageUrl: BunnyImage,
        Heading: "Story 1",
        text: "this is text-1",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story1",
        image: true,
      },
    ],
    Categories: ["cat-2", "cat3"],
  },
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 2 text",
    Slug: "webstory-2",
    Story: [
      {
        imageUrl: testAndStubsGen,
        Heading: "Story 2",
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        image: false,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Story 2",
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        image: true,
      },
      {
        imageUrl: testAndStubsGen,
        Heading: "Story 2",
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Story 2",
        text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Story 2",
        text: "this is text-2",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Story 2",
        text: "this is text-2",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Story 2",
        text: "this is text-2",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Story 2",
        text: "this is text-2",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Story 2",
        text: "this is text-2",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Story 2",
        text: "this is text-2",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Story 2",
        text: "this is text-2",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
    ],
    Categories: ["cat-3", "cat1"],
  },
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 3 text",
    Slug: "webstory-3",
    Story: [
      {
        imageUrl: BunnyImage,
        Heading: "Story 3",
        text: "this is text-3",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
    ],
    Categories: ["cat-3", "cat4"],
  },
];
