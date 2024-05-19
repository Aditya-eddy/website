import BunnyImage from "@/public/images/community-bunny.png";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import thumbNail from "@/public/images/demo-thumbnail-bg.png";
// <---Card one --->
import card1_image2 from "@/public/images/webstories/images/card_1-image-2.png";
import card1_image3 from "@/public/images/webstories/images/card_1-image-3.png";
import card1_image4 from "@/public/images/webstories/images/card_1-image-4.png";
import card1_image5 from "@/public/images/webstories/images/card_1-image-5.png";
import card1_image6 from "@/public/images/webstories/images/card_1-image-6.png";
import card1_image7 from "@/public/images/webstories/images/card_1-image-7.png";
import card1_image8 from "@/public/images/webstories/images/card_1-image-8.png";
// <---Card second --->
import card2_image1 from "@/public/images/webstories/images/card_2-image-1.png";
import card2_image2 from "@/public/images/webstories/images/card_2-image-2.png";
import card2_image3 from "@/public/images/webstories/images/card_2-image-3.png";
import card2_image4 from "@/public/images/webstories/images/card_2-image-4.png";
import card2_image5 from "@/public/images/webstories/images/card_2-image-5.png";
import card2_image6 from "@/public/images/webstories/images/card_2-image-6.png";
import card2_image7 from "@/public/images/webstories/images/card_2-image-7.png";
// <---Card five --->
import card5_image1 from "@/public/images/webstories/images/card_5-image-1.png";
import card5_image2 from "@/public/images/webstories/images/card_5-image-2.png";
import card5_image3 from "@/public/images/webstories/images/card_5-image-3.png";
import card5_image4 from "@/public/images/webstories/images/card_5-image-4.png";
import card5_image5 from "@/public/images/webstories/images/card_5-image-5.png";
import card5_image6 from "@/public/images/webstories/images/card_5-image-6.png";
import card5_image7 from "@/public/images/webstories/images/card_5-image-7.png";

//thumbnail Section
import card_1_thumbnail from "@/public/images/webstories/images/card_1-thumbnail.png";
import card_2_thumbnail from "@/public/images/webstories/images/card_2-thumbnail.png";
import card_3_thumbnail from "@/public/images/webstories/images/card_3-thumbnail.png";
import card_4_thumbnail from "@/public/images/webstories/images/card_4-thumbnail.png";
import card_5_thumbnail from "@/public/images/webstories/images/card_5-thumbnail.png";
import follow_more from "@/public/images/webstories/images/follow_more.png";
import captureRelay from "@/public/images/CaptureAndReplay.json";
export const DummyData = [
  {
    //card-1
    CardImage: card_1_thumbnail,
    CardDescription: "Balancing unit and e2e test cases !",
    Slug: "balancing-unit-and-e2e-test-cases",
    Story: [
      {
        imageUrl: card_1_thumbnail,
        Heading: "Importance of Testing",
        text: "Software testing is crucial for ensuring applications function as intended. It identifies bugs and prevents issues from reaching production.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card1_image2,
        Heading: "Two Testing Types",
        text: "There are two main testing approaches: unit testing focuses on individual software components, while end-to-end testing validates the entire system flow.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card1_image3,
        Heading: "Strengths of Unit Testing",
        text: "Unit tests are fast to write and execute, making them ideal for catching errors early in the development process. They also promote modular code.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card1_image4,
        Heading: "Strengths of End-to-End Testing",
        text: "End-to-end tests simulate real user interactions and expose integration issues between different parts of the system.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card1_image5,
        Heading: "Challenges of Unit Testing",
        text: "Unit tests can be time-consuming to maintain as the application evolves. Mocking dependencies can add complexity.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card1_image6,
        Heading: "Challenges of End-to-End Testing",
        text: "End-to-end tests are slower to run and more susceptible to external factors. They can be brittle and break easily with code changes.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card1_image7,
        Heading: "Finding the Balance",
        text: "Both unit and end-to-end testing are valuable practices. The optimal strategy involves using a combination of both, tailored to the specific project.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card1_image8,
        Heading: "Effective Testing Strategy",
        text: "A well-defined testing strategy considers factors like project size, complexity, and risk tolerance. It ensures a balance between unit and end-to-end testing for efficient and thorough quality assurance.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: follow_more,
        // Heading: "Effective Testing Strategy",
        // text: "A well-defined testing strategy considers factors like project size, complexity, and risk tolerance. It ensures a balance between unit and end-to-end testing for efficient and thorough quality assurance.",
        swipeText: "Swipe to learn more.",
        swipeLink: "https://keploy.io/blog",
        image: true,
      },
    ],
    Categories: ["cat-1", "cat2"],
  },
  {
    //card-2
    CardImage: card_2_thumbnail,
    CardDescription: "Best Guide for Performance Testing !",
    Slug: "webstory-1",
    Story: [
      {
        imageUrl: card_2_thumbnail,
        Heading: "A Must for Modern Software",
        text: "Performance testing helps identify bottlenecks and ensures software meets performance requirements.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card2_image1,
        Heading: "Types of Performance Testing",
        text: "There are various types of performance testing, including load testing, stress testing, and scalability testing.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card2_image2,
        Heading: "Benefits of Performance Testing",
        text: "Performance testing improves responsiveness, stability, and user experience of the software.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card2_image3,
        Heading: "Performance Testing Process",
        text: "The performance testing process involves defining goals, planning the test, executing the test, analyzing results, and taking corrective actions.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card2_image4,
        Heading: "Performance Testing Tools",
        text: "LoadRunner, JMeter, and K6 are some popular performance testing tools.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card2_image5,
        Heading: "Performance Metrics",
        text: "Response time, throughput, and resource utilization are key performance metrics to track.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card2_image6,
        Heading: "Performance Testing Best Practices",
        text: "Define realistic test scenarios, use a performance testing strategy, and monitor performance throughout the development lifecycle.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: card2_image7,
        Heading: "Performance Testing for Success",
        text: "Performance testing is crucial for delivering high-performance software that meets user expectations.",
        // swipeText: "Swipe to read more",
        // swipeLink: "https://example.com/story1",
        image: true,
      },
      {
        imageUrl: follow_more,
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story1",
        image: true,
      },
    ],
    Categories: ["cat-1", "cat2"],
  },
  {
    //card-3
    CardImage: card_3_thumbnail,
    CardDescription: "Building Trust with Code Integrity !",
    Slug: "webstory-1",
    Story: [
      {
        imageUrl: card_4_thumbnail,
        Heading: "The Gatekeeper of Trust",
        text: "Imagine code integrity as a security guard for your software, ensuring only authorized code runs.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Combating Malicious Actors",
        text: "Code integrity safeguards against attackers tampering with software to inject malicious code.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Building User Confidence",
        text: "Rigorous code integrity checks let users trust the software they're using.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Preventing Unauthorized Access",
        text: "Robust code integrity measures can significantly reduce the risk of malware infiltration.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Securing the Software Supply Chain",
        text: "Code integrity is crucial as developers rely on third-party libraries and components.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Verifying Code Authenticity",
        text: "Code integrity techniques ensure the code you run is genuine and hasn't been altered.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Detecting Tampering Attempts",
        text: "Code integrity can identify and prevent attempts to modify software for malicious purposes.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Maintaining Software Reliability",
        text: "Ensuring code integrity helps maintain the reliability and expected behavior of the software.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Building a Foundation of Trust",
        text: "Code integrity is a critical step in building trust and confidence in the software you use.",
        image: true,
      },
      {
        imageUrl: follow_more,
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story1",
        image: true,
      },
    ],
    Categories: ["cat-2", "cat3"],
  },
  {
    //card-4
    CardImage: card_4_thumbnail,
    CardDescription: "Strategies for handling edge cases !",
    Slug: "webstory-2",
    Story: [
      {
        imageUrl: card_4_thumbnail,
        Heading: "The Achilles' Heel of E2E Tests",
        text: "Edge cases, unexpected scenarios, can expose flaws in E2E tests.",
        image: false,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Identify Edge Cases Systematically",
        text: "Analyze requirements, user journeys, and system behavior to find edge cases.",
        image: true,
      },
      {
        imageUrl: testAndStubsGen,
        Heading: "Prioritize Edge Cases Based on Risk",
        text: "Focus on edge cases with high impact or likelihood of occurrence.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Leverage Data-Driven Testing for Edge Cases",
        text: "Use real-world data to create dynamic test scenarios for edge cases.",
        image: true,
      },
      {
        imageUrl: BunnyImage,
        Heading: "Mock External Dependencies for Edge Cases",
        text: "Simulate external system behavior to isolate and test edge cases effectively.",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Handle Dynamic Data in Edge Case Tests",
        text: "Design tests to handle unexpected data values during edge case scenarios.",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Utilize Page Object Model for Maintainable Tests",
        text: "Separate page UI elements from test logic for easier maintenance of E2E tests.",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Clear and Concise Edge Case Reporting",
        text: "Document edge cases clearly, including expected results and reproduction steps.",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Automate Edge Case Tests Whenever Possible",
        text: "Automate edge case tests for efficient regression testing.",
        image: true,
      },
      {
        imageUrl: thumbNail,
        Heading: "Continuous Monitoring for Edge Case Detection",
        text: "Monitor application behavior to identify new edge cases over time.",
        image: true,
      },
      {
        imageUrl: follow_more,
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
    ],
    Categories: ["cat-3", "cat1"],
  },
  {
    //card-5
    CardImage: card_5_thumbnail,
    CardDescription: "Which API architecture to use?",
    Slug: "webstory-3",
    Story: [
      {
        imageUrl: card_5_thumbnail,
        Heading: "A World of Data Exchange",
        text: "APIs (Application Programming Interfaces) act as messengers, enabling communication between different software systems.",
        image: true,
      },
      {
        imageUrl: card5_image1,
        Heading: "Powering the Modern Web",
        text: "Web APIs allow web applications to access and exchange data over the internet.",
        image: true,
      },
      {
        imageUrl: card5_image2,
        Heading: "REST APIs",
        text: "A Structured Approach REST (REpresentational State Transfer) APIs follow a standardized approach for building web APIs.",
        image: true,
      },
      {
        imageUrl: card5_image3,
        Heading: "SOAP APIs",
        text: "A Mature Option SOAP (Simple Object Access Protocol) APIs are an XML-based protocol for web services integration.",
        image: true,
      },
      {
        imageUrl: card5_image4,
        Heading: "GraphQL APIs",
        text: "Flexibility for Complex Queries GraphQL APIs offer a flexible way to request specific data from a server.",
        image: true,
      },
      {
        imageUrl: card5_image5,
        Heading: "Streamlining Internal Communication",
        text: "Internal APIs facilitate communication between different components within a single application.",
        image: true,
      },
      {
        imageUrl: card5_image6,
        Heading: "Expanding Functionality Partner",
        text: "APIs enable integration with external services to extend an application's functionality.",
        image: true,
      },
      {
        imageUrl: card5_image7,
        Heading: "Designing API Architecture for Scalability",
        text: "A well-designed API architecture ensures efficient data exchange and scalability for future growth.",
        image: true,
      },
      {
        imageUrl: follow_more,
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
        image: true,
      },
    ],
    Categories: ["cat-3", "cat4"],
  },
];
