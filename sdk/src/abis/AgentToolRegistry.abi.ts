export default [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllTools",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct AgentTool[]",
        components: [
          {
            name: "idx",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "desc",
            type: "string",
            internalType: "string",
          },
          {
            name: "abitypes",
            type: "string[]",
            internalType: "string[]",
          },
          {
            name: "categories",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getDescriptions",
    inputs: [
      {
        name: "indexes",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRegisteredCategories",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTool",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct AgentTool",
        components: [
          {
            name: "idx",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "desc",
            type: "string",
            internalType: "string",
          },
          {
            name: "abitypes",
            type: "string[]",
            internalType: "string[]",
          },
          {
            name: "categories",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getToolsByCategories",
    inputs: [
      {
        name: "category",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct AgentTool[]",
        components: [
          {
            name: "idx",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "desc",
            type: "string",
            internalType: "string",
          },
          {
            name: "abitypes",
            type: "string[]",
            internalType: "string[]",
          },
          {
            name: "categories",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getToolsByCategories",
    inputs: [
      {
        name: "categories",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct AgentTool[]",
        components: [
          {
            name: "idx",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "desc",
            type: "string",
            internalType: "string",
          },
          {
            name: "abitypes",
            type: "string[]",
            internalType: "string[]",
          },
          {
            name: "categories",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getToolsByCategory",
    inputs: [
      {
        name: "category",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct AgentTool[]",
        components: [
          {
            name: "idx",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "desc",
            type: "string",
            internalType: "string",
          },
          {
            name: "abitypes",
            type: "string[]",
            internalType: "string[]",
          },
          {
            name: "categories",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "target",
            type: "address",
            internalType: "address",
          },
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "register",
    inputs: [
      {
        name: "name",
        type: "string",
        internalType: "string",
      },
      {
        name: "desc",
        type: "string",
        internalType: "string",
      },
      {
        name: "abitypes",
        type: "string[]",
        internalType: "string[]",
      },
      {
        name: "categories",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "idx",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "toolIdxsByCategory",
    inputs: [
      {
        name: "category",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "CategoryRegistered",
    inputs: [
      {
        name: "idx",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "category",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ToolRegistered",
    inputs: [
      {
        name: "idx",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "name",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "target",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "category",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InvalidAbiType",
    inputs: [],
  },
  {
    type: "error",
    name: "MissingAbiTypes",
    inputs: [],
  },
  {
    type: "error",
    name: "MissingCategories",
    inputs: [],
  },
  {
    type: "error",
    name: "OutOfBounds",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
] as const;
