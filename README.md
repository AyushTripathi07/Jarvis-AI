# Jarvis AI Chatbot React Application

## Overview

This React application is a user interface for interacting with Jarvis AI, a chatbot powered by OpenAI's API. The chatbot utilizes the OpenAI API key to facilitate frequent chat interactions with users.

## Features

- Seamless communication with Jarvis AI through a user-friendly interface.
- Real-time responses powered by OpenAI's cutting-edge language model.
- Customizable chat experience with options for personalization.
- Easy integration into existing web applications.

## Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/AyushTripathi07/Jarvis-AI.git
    ```

2. **Navigate to the project directory:**

    ```
    cd Jarvis-AI
    ```

3. **Install dependencies:**

    ```
    npm install
    ```

4. **Set up OpenAI API key:**

    - Sign up for an account at [OpenAI](https://openai.com).
    - Retrieve your API key from the dashboard.
    - Create a `.env` file in the root directory of the project.
    - Add the following line to the `.env` file:

        ```
        OPENAI_API_KEY=your-api-key-goes-here
        ```

5. **Start the development server:**

    ```
    npm start
    ```

6. **Open your browser and navigate to `http://localhost:3000` to view the application.**

## Usage

1. Once the application is running, you will be greeted by Jarvis AI.
2. Type your message in the input field and press Enter to send.
3. Jarvis AI will process your query and respond accordingly.
4. Enjoy chatting with Jarvis AI!

## Issues

- **OpenAI API not Free:** OpenAI has stopped providing free trial credits for its API. As a result, the application may not function if you haven't purchased prepayment credits. To resolve this issue:
    - Go to [platform.openai.com](https://platform.openai.com).

       ```
    {
        message: 'You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.',
        type: 'insufficient_quota',
        code: 'insufficient_quota',
    }
    ```


