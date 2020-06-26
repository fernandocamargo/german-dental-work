import Client from 'apollo-boost';

export default new Client({
  uri: window.atob(
    'aHR0cHM6Ly9mcm9udGVuZC1jaGFsbGVuZ2UuanVuZ3NvZnQuaW8vZ3JhcGhxbA=='
  ),
});
