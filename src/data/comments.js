export const getCommentsData = async () => {
  return [
    {
      _id: "10",
      user_id: "a",
      username: "Mohammad Rezaii",
      des: "it was a nice post, Thank you!",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2025-12-31T17:22:05.092+00:00", // Fixed the space in the timestamp
    },
    {
      _id: "11",
      
      user_id: "b",
      username: "Paul M. Williams",
      
      des: "a reply for Mohammad",
      post: "1",
      parent: "10",
      replyOnUser: "a",
      createdAt: "2025-12-31T17:22:05.092+00:00", // Fixed the space in the timestamp
    },
    {
      _id: "12",
      
      user_id: "b",
      username: "Paul M. Williams",
      
      des: "keep it up bro <3",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2025-12-31T17:22:05.092+00:00",
    },
    {
      _id: "13",
      user_id: "c",
      username: "Jessica C. Stephens",
    
      des: "I'm always interested in your content :)",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2025-12-31T17:22:05.092+00:00",
    }
  
  ]
}
