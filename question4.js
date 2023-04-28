const candidate = {
  isLookingForJob: true,
  location: "mangalore",
  name: "jenny",
  otherInfo: {
    age: 26,
    interests: ["a", "b", "c"],
    isEmployed: false,
  },
  remoteFriendly: true,
};

const getSignedOffer = (candidate) => {
  if (!candidate.isLookingForJob || !candidate.remoteFriendly) {
    return {
      error: "Candidate doesnt meet requirements",
      candidate,
      offerSigned: false,
    };
  } else {
    return {
      error: null,
      candidate: {
        isLookingForJob: false,
        ...candidate,
        otherInfo: {
          ...candidate.otherInfo,
          isEmployed: true,
        },
      },
      offerSigned: true,
    };
  }
};
console.log(getSignedOffer(candidate));