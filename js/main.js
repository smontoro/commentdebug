function todoList() {
	//gets the value from the input
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	//concerts the value into text
	var userNameText = document.createTextNode(username)
	var commentText = document.createTextNode(comment)

	//creates elements to store the text in and adds them text inside of them
	var newListItem = document.createElement("li")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("h3")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("p")
	newComment.appendChild(commentText)

    
	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)
}