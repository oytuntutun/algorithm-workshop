// If a name has exactly 4 letters in it, you can be sure that
// it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

const findFriends = (friendList) => {
  let myFriends = []
  friendList.forEach((friend) => {
    if (friend.length === 4) {
      myFriends.push(friend)
    }
  })
  console.log(myFriends)
}

export default findFriends
