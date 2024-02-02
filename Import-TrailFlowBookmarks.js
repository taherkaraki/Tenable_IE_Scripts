const jsonString = `
{
  "data": {
    "searchBookmarks": [
      {
        "id": 249,
        "expression": "msDS-AllowedToActOnBehalfOfOtherIdentity:\\"S-1-5\\"",
        "name": "Changes on Computers with Resource-Based Constraint Delegation",
        "category": "Computers"
      },
      {
        "id": 248,
        "expression": "samaccounttype:\\"SAM_NORMAL_USER_ACCOUNT\\" AND lastlogontimestamp:\\"202\\" AND badpwdcount:0 AND admincount:1",
        "name": "Successful Authentication on privileged accounts",
        "category": "Users"
      }
    ]
  }
}
`;

// Parse the JSON string into an object
const jsonObject = JSON.parse(jsonString);

// CSRF token retrieval (assuming you have a way to get this, e.g., from the DOM)
const csrfToken = document.getElementById('app').getAttribute('data-csrf-token');

// Function to create a search bookmark entry for each bookmark
function createSearchBookmarkEntry(bookmarks) {
  bookmarks.forEach(bookmark => {
    const body = JSON.stringify({
      query: `
        mutation mutationCreateSearchBookmarkEntry($searchBookmarkEntry: InputCreateSearchBookmarkEntry!) {
          createSearchBookmarkEntry(
            searchBookmarkEntry: $searchBookmarkEntry
          ) {
            id
            expression
            name
            category
          }
        }
      `,
      variables: {
        searchBookmarkEntry: {
          expression: bookmark.expression,
          name: bookmark.name,
          category: bookmark.category
        }
      }
    });

    fetch('/w/graphql/current/graphqlapi?q=mutationCreateSearchBookmarkEntry', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Csrf-Token': csrfToken
      },
      body: body
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log('Bookmark created successfully:', data))
    .catch(error => console.error('Error creating bookmark:', error));
  });
}

// Call the function with your bookmarks
createSearchBookmarkEntry(jsonObject.data.searchBookmarks);
