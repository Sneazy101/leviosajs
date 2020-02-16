const staticFiles = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title>Leviosa App</title>
</head>
<body>
  <div react-root="app"></div>
  <script src="bundle.js"></script>
</body>
</html>`;

module.exports = staticFiles;
