// List of current users 
const currentusers: string[] = ['Iqbal', 'Rayyan', 'Rizwan', 'Zafar'];

// List of new users
const newusers: string[] = ['Sajid', 'Arsalan', 'Sabir', 'Javed', 'Rashid'];

// Loop through the new_users list
for (const newUsername of newusers) {
    // Check if the new username (in lowercase) is in the current users (in lowercase)
    const usernameExists = currentusers.some(
        (currentUser) => currentUser.toLowerCase() === newUsername.toLowerCase()
    );

    if (usernameExists) {
        console.log(`The username "${newUsername}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${newUsername}" is available.`);
    }
}
