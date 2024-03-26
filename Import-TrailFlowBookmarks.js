/*
    .SYNOPSIS
        Imports TrailFlow bookmarks to Tenable Identity Exposure (formerly tenable.ad).

    .DESCRIPTION
        This javascript imports a collection of useful TrailFlow Bookmarks to Tenable Identity Exposure (formerly tenable.ad) by communicating with the web interface directly and importing bookmarks recursively. Works for both on-prem and SaaS environments.

    .USAGE
      -  Open google chrome
      -  Login to Tenable Identity Exposure portal
      -  Open developer console
      -  Copy the content of this JS file to the console (and hit enter)
      et voila!

    .CREDITS
        Taher Karaki; @iTaher
*/
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
              "name": "Successful Authentication on privileged accountss",
              "category": "Users"
          },
          {
              "id": 247,
              "expression": "samaccounttype:\\"SAM_NORMAL_USER_ACCOUNT\\" AND lastlogontimestamp:\\"202\\" AND badpwdcount:0",
              "name": "Successful Authentication on Identities",
              "category": "Users"
          },
          {
              "id": 246,
              "expression": "scriptpath:\\".\\"",
              "name": "Login Script changes on users",
              "category": "Users"
          },
          {
              "id": 245,
              "expression": "cn:\\"Protected Users\\"",
              "name": "Changes on Protected Users group",
              "category": "Groups"
          },
          {
              "id": 244,
              "expression": "objectclass:\\"GroupManagedServiceAccount\\"",
              "name": "Changes on Group Managed Service Accounts",
              "category": "Service Accounts"
          },
          {
              "id": 243,
              "expression": "(cn:\\"svc\\" OR cn:\\"service\\") AND samaccounttype:\\"SAM_NORMAL_USER_ACCOUNT\\"",
              "name": "Changes on Service Accounts",
              "category": "Service Accounts"
          },
          {
              "id": 242,
              "expression": "primarygroupid:516 OR primarygroupid:521 OR primarygroupid:498",
              "name": "Changes on Domain Controllers",
              "category": "Computers"
          },
          {
              "id": 240,
              "expression": "objectclass:\\"server\\"",
              "name": "Changes on Servers",
              "category": "Computers"
          },
          {
              "id": 235,
              "expression": "dnsrecord:\\"A\\" AND dnsrecord:240 AND distinguishedName:\\"DC=alsid.corp\\"",
              "name": "DNS A-Records changes",
              "category": "DNS"
          },
          {
              "id": 234,
              "expression": "isdeleted:true",
              "name": "Deleted Objects",
              "category": "Misc"
          },
          {
              "id": 233,
              "expression": "objectclass:\\"organizationalUnit\\" AND isdeleted:true",
              "name": "OU Deletions",
              "category": "Organizational Units"
          },
          {
              "id": 232,
              "expression": "objectclass:\\"organizationalUnit\\"",
              "name": "OU Changes",
              "category": "Organizational Units"
          },
          {
              "id": 231,
              "expression": "useraccountcontrol:\\"Normal\\" AND badpwdcount:1 AND badpasswordtime:\\"2023\\"",
              "name": "Changes on Accounts with Failed Authentication",
              "category": "Users"
          },
          {
              "id": 230,
              "expression": "samaccounttype:\\"SAM_GROUP_OBJECT\\" AND admincount:1 AND isdeviant:true",
              "name": "Deviances on privileged groups",
              "category": "Groups"
          },
          {
              "id": 229,
              "expression": "admincount:1 AND isdeviant:true AND samaccounttype:\\"SAM_NORMAL_USER_ACCOUNT\\"",
              "name": "Deviances on privileged accounts",
              "category": "Users"
          },
          {
              "id": 227,
              "expression": "admincount:1",
              "name": "Changes on privileged accounts",
              "category": "Users"
          },
          {
              "id": 226,
              "expression": "samaccounttype:\\"SAM_GROUP_OBJECT\\" AND admincount:1",
              "name": "Changes on Privileged Groups",
              "category": "Groups"
          },
          {
              "id": 225,
              "expression": "logonhours:0 AND admincount:1",
              "name": "Changes on Honey Accounts",
              "category": "Users"
          },
          {
              "id": 221,
              "expression": "globalpath:\\"scripts.ini\\"",
              "name": "Group Policy Object Scripts",
              "category": "SYSVOL"
          },
          {
              "id": 216,
              "expression": "scriptsini-startup-cmdline-0:\\".\\" OR scriptsini-startup-cmdline-1:\\".\\" OR scriptsini-startup-cmdline-2:\\".\\" OR scriptsini-startup-cmdline-3:\\".\\"",
              "name": "Monitor Startup-Shutdown-LogOff-LogOn Scripts",
              "category": "SYSVOL"
          },
          {
              "id": 211,
              "expression": "operatingSystem:\\"XP\\" OR operatingSystem:\\"Vista\\" OR operatingSystem:\\"2003\\" OR operatingSystem:\\"2000\\"",
              "name": "Changes on Machines with Obsolete OS",
              "category": "Computers"
          },
          {
              "id": 194,
              "expression": "cn:\\"adminsdholder\\"",
              "name": "Sneaky SDProp Persistence",
              "category": "Misc"
          },
          {
              "id": 122,
              "expression": "globalpath:\\".ps1\\" OR globalpath:\\".exe\\" OR globalpath:\\".vbs\\" OR globalpath:\\".cmd\\" OR globalpath:\\".bat\\"",
              "name": "Detect Executables in Sysvol",
              "category": "SYSVOL"
          },
          {
              "id": 120,
              "expression": "cn:\\"domain admins\\" OR cn:\\"enterprise admins\\"",
              "name": "Changes on Domain and Enterprise Admins",
              "category": "Groups"
          },
          {
              "id": 115,
              "expression": "isdeviant:true",
              "name": "Events having Deviants",
              "category": "Misc"
          },
          {
              "id": 114,
              "expression": "useraccountcontrol:\\"PASSWD_NOTREQD\\"",
              "name": "Accounts with Password not Required option",
              "category": "Users"
          },
          {
              "id": 113,
              "expression": "useraccountcontrol:\\"LOCKOUT\\"",
              "name": "Locked out Accounts",
              "category": "Users"
          },
          {
              "id": 112,
              "expression": "useraccountcontrol:\\"TRUSTED_TO_AUTHENTICATE_FOR_DELEGATION\\"",
              "name": "Changes on Machines Trusted for Delegation",
              "category": "Computers"
          },
          {
              "id": 110,
              "expression": "samaccounttype:\\"SAM_GROUP_OBJECT\\"",
              "name": "Changes on all groups",
              "category": "Groups"
          },
          {
              "id": 108,
              "expression": "badpwdcount:1 AND (badpasswordtime:\\"2022\\" OR badpasswordtime:\\"2023\\") AND cn:\\"svc\\"",
              "name": "Failed Authentication for accounts with Kerberos Services",
              "category": "Users"
          },
          {
              "id": 105,
              "expression": "badpwdcount:\\"5\\"",
              "name": "Account with multiple failed authentications (5)",
              "category": "Users"
          },
          {
              "id": 104,
              "expression": "pwdlastSet:\\"1601-01-01\\" AND samaccounttype:\\"SAM_NORMAL_USER_ACCOUNT\\" AND isdeviant:true",
              "name": "Deviants on Users who never changed passwords",
              "category": "Users"
          },
          {
              "id": 46,
              "expression": "inf-privilege_rights-sedebugprivilege:\\"S-1-\\"",
              "name": "Rights assignment - SeDebugPrivilege",
              "category": "SYSVOL"
          },
          {
              "id": 31,
              "expression": "sidhistory:\\"S-1-5\\"",
              "name": "ADObjects with sidHistory",
              "category": "Misc"
          },
          {
            "id": 437,
            "expression": "globalpath:\\"sysvol\\" AND types:\\"Scriptsini\\"",
            "name": "Changes on GPOs that include scripts",
            "category": "SYSVOL"
        },
        {
            "id": 436,
            "expression": "types:\\"REGISTRY\\"",
            "name": "Changes to Registry Settings in GPP",
            "category": "SYSVOL"
        },
        {
            "id": 403,
            "expression": "samaccounttype:\\"SAM_NORMAL_USER_ACCOUNT\\" AND lastlogontimestamp:\\"202\\" AND badpwdcount:0 AND admincount:1",
            "name": "Successful Authentication by privileged accounts",
            "category": "Users"
        },
        {
            "id": 328,
            "expression": "globalpath:\\".ps1\\" OR globalpath:\\".exe\\" OR globalpath:\\".vbs\\" OR globalpath:\\".cmd\\" OR globalpath:\\".bat\\"",
            "name": "Changes on Scripts and Executables in Sysvol",
            "category": "SYSVOL"
        },
        {
            "id": 169,
            "expression": "UserAccountControl:\\"DISABLE\\"",
            "name": "Changes on Disabled users",
            "category": "Users"
        },
        {
            "id": 168,
            "expression": "samaccounttype:\\"SAM_NORMAL_USER_ACCOUNT\\"",
            "name": "Changes on all users",
            "category": "Users"
        }
      ]
  }
}

`;

// Parse the JSON string to an object
const jsonObject = JSON.parse(jsonString);

// CSRF token retrieval (make sure this matches your actual DOM or setup)
const csrfToken = document.getElementById('app').getAttribute('data-csrf-token');

// Function to iterate over bookmarks and create each as a search bookmark entry
function createSearchBookmarkEntries(bookmarks) {
  bookmarks.forEach(bookmark => {
    const mutationQuery = `mutation mutationCreateSearchBookmarkEntry($searchBookmarkEntry: InputCreateSearchBookmarkEntry!) {
      createSearchBookmarkEntry(
        searchBookmarkEntry: $searchBookmarkEntry
      ) {
        id
        expression
        name
        category
      }
    }`;

    const variables = {
      searchBookmarkEntry: {
        expression: bookmark.expression,
        name: bookmark.name,
        category: bookmark.category
      }
    };

    const requestBody = JSON.stringify({
      query: mutationQuery,
      variables: variables
    });

    fetch('/w/graphql/current/graphqlapi?q=mutationCreateSearchBookmarkEntry', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Csrf-Token': csrfToken
      },
      body: requestBody
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

// Call the function to create bookmark entries
createSearchBookmarkEntries(jsonObject.data.searchBookmarks);
console.log('All Done')
