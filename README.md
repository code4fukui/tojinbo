# tojinbo

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web application for sharing and exploring the unique rock formations at Tojinbo, Fukui. The app features user-submitted photos, an interactive VR map, an AI chatbot, and gamification elements.

- **Live Demo:** [iwapp (開発中)](https://iwapp.code4fukui.org/)

## Features

-   **Rock Spotting**: Users can upload photos of interesting rock formations, giving them a nickname and a description of what they look like (e.g., "a heart," "a dog").
-   **"Ii-wan!" Like System**: Visitors can vote for their favorite rock photos with an "いいわん!" (a pun on "good rock" and a dog's bark) button.
-   **Interactive VR Map**: Explore a 3D model of the Tojinbo cliffs. The map includes clickable arrows to navigate to points of interest.
-   **AI Chatbot "Iwanwan"**: Ask "いわんわん", the Tojinbo guide dog, questions about the area. The chatbot provides helpful, "wan"-ending answers about Tojinbo's history and attractions.
-   **Iwacoin Gamification**: Earn virtual "iwacoin" by participating in activities like posting rock photos or joining cleanup events. Coins can be exchanged for rewards.
-   **Events & Activities**: The homepage features an event list and links to activities, including a video of a "Tojinbo VR Jet Coaster".

## Getting Started

### Prerequisites

-   [Deno](https://deno.land/) runtime

### Local Development

To run the server on your local machine:

```bash
deno run -A server.js
```

The application will be available at `http://localhost:8000`.

## Server Management & Deployment

These instructions cover deploying and managing the application on a remote server.

### 1. Initial SSH Setup (First Time Only)

If you haven't already, generate an SSH key pair on your local machine.

```bash
# Create .ssh directory if it doesn't exist
mkdir -p ~/.ssh

# Generate a new ed25519 key pair
ssh-keygen -t ed25519

# Display your public key to copy it
cat ~/.ssh/id_ed25519.pub
```

On the server, add your public key to the `authorized_keys` file.

```bash
# Run these commands on the server as the 'iwapp' user
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Paste your public key from the previous step and append it
echo "ssh-ed25519 AAAA..." >> ~/.ssh/authorized_keys
```

### 2. Connecting and Deploying Updates

Connect to the server via SSH and navigate to the project directory.

```bash
ssh -i ~/.ssh/id_ed25519 iwapp@iwapp.code4fukui.org
cd tojinbo
```

Pull the latest changes from the GitHub repository.

```bash
git pull
```

### 3. Managing the Application Process

**Check Running Processes**

To see if the server is already running, use `ps`.

```bash
ps -fu iwapp
```
*Example Output:*
```
UID          PID    PPID  C STIME TTY          TIME CMD
iwapp     668120       1  0 Jun17 ?        00:00:00 deno run -A server.js 8009
```

**Stop the Process**

Use the `kill` command with the Process ID (PID) from the `ps` output.

```bash
# Using the example PID from above
kill 668120
```

**Start the Process**

To run the server in the background, use `nohup` and `&`.

```bash
# Standard start
nohup deno run -A server.js 8009 &

# Start with auto-restart on file changes (for development)
nohup deno run -A --watch server.js 8009 &
```

## API Endpoints

The server provides a simple JSON-based API for managing rock data.

-   **`POST /api/save`**
    -   Saves a new rock photo submission. The server automatically adds a unique `id` and initializes `likecount` to 0.
    -   **Request Body:**
        ```json
        {
          "img": "data:image/jpeg;base64,...",
          "nickname": "string",
          "comment": "string",
          "genderm": boolean,
          "genderf": boolean
        }
        ```

-   **`GET /api/watch`**
    -   Retrieves an array of all saved rock data objects.

-   **`POST /api/like`**
    -   Increments the `likecount` for a specific rock submission.
    -   **Request Body:**
        ```json
        {
          "id": "unique-rock-id-string"
        }
        ```
    -   **Returns:** The new `likecount` as a number.
