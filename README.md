# Minecraft Server Query

Minecraft Server Query is a simple Node.js application that uses the `minecraft-server-util` package to query and display the status of a Minecraft server. This tool can show you how many players are online, the server version, and the message of the day directly from the command line.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v12.x or later)
- npm (Node Package Manager)

## Installation

To install Minecraft Server Query, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Hans-L-Max/MinecraftServerQuery.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MinecraftServerQuery
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

To use Minecraft Server Query, run the following command from the root of your project:

```bash
npm start <server-ip>:<server-port>
```
or

```bash
node minecraftServerQuery.js <server-ip>:<server-port>
```

Replace `<server-ip>` with the IP address of the Minecraft server and `<server-port>` with the port number (default is 25565 if not specified).


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright
© 2024 Max Brückner. All rights reserved.
