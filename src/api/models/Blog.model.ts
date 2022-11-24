/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/login": {
    post: {
      responses: {
        /** A successful response */
        200: {
          content: {
            "application/json": {
              /** @description The JWT token */
              token: string;
              /** @description The user id */
              userId: string;
            };
          };
        };
        /** Bad request */
        401: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["UserBody"];
        };
      };
    };
  };
  "/get": {
    get: {
      parameters: {
        query: {
          /** The sort criteria */
          sort?: string;
          /** The fields to return */
          fields?: string;
        };
      };
      responses: {
        /** An array of posts */
        200: {
          content: {
            "application/json": components["schemas"]["Post"][];
          };
        };
        /** Bad request */
        400: unknown;
      };
    };
  };
  "/get/{id}": {
    get: {
      parameters: {
        path: {
          /** The post id */
          id: string;
        };
        query: {
          /** The fields to return */
          fields?: string;
        };
      };
      responses: {
        /** A post */
        200: {
          content: {
            "application/json": components["schemas"]["Post"];
          };
        };
        /** Bad request */
        400: unknown;
      };
    };
  };
  "/create": {
    post: {
      responses: {
        /** Post created */
        201: unknown;
        /** Bad request */
        400: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["PostBody"];
        };
      };
    };
  };
  "/delete/{id}": {
    /** Use to delete a post */
    delete: {
      parameters: {
        path: {
          /** The post id */
          id: string;
        };
      };
      responses: {
        /** A successful response */
        200: unknown;
      };
    };
  };
  "/update/{id}": {
    put: {
      parameters: {
        path: {
          /** The post id */
          id: string;
        };
      };
      responses: {
        /** Post updated */
        200: unknown;
        /** Bad request */
        400: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["PostBody"];
        };
      };
    };
  };
}

export interface components {
  schemas: {
    /**
     * @example {
     *   "title": "Blog Post",
     *   "html": "<p>This is a blog post</p>",
     *   "delta": {
     *     "ops": [
     *       {
     *         "insert": "Post delta"
     *       }
     *     ]
     *   },
     *   "text": "This is a blog post"
     * }
     */
    PostBody: {
      /** @description The title of the post */
      title: string;
      /** @description The html of the post */
      html: string;
      /** @description The delta of the post */
      delta: {
        ops?: {
          insert?: unknown;
          delete?: number;
          retain?: number;
          attributes?: { [key: string]: unknown };
        }[];
      };
      /** @description The text of the post */
      text: string;
    };
    /**
     * @example {
     *   "createdAt": "2022-11-20T16:34:49.816+00:00",
     *   "updatedAt": "2022-11-20T16:34:49.816+00:00"
     * }
     */
    PostMeta: {
      /**
       * Format: date-time
       * @description The date and time the post was created
       */
      createdAt: string;
      /**
       * Format: date-time
       * @description The date and time the post was updated
       */
      updatedAt: string;
    };
    /**
     * @example {
     *   "id": "637a5729124f04fe645a8199"
     * }
     */
    PostId: {
      /** @description The auto-generated id of the post */
      id: string;
    };
    Post: components["schemas"]["PostId"] &
      components["schemas"]["PostBody"] &
      components["schemas"]["PostMeta"];
    /**
     * @example {
     *   "email": "waaldecoen@outlook.com",
     *   "password": 1234
     * }
     */
    UserBody: {
      /** @description The email of the user. */
      email: string;
      /** @description The password of the user. */
      password: string;
    };
    /**
     * @example {
     *   "createdAt": "2022-11-20T16:34:49.816+00:00",
     *   "updatedAt": "2022-11-20T16:34:49.816+00:00"
     * }
     */
    UserMeta: {
      /**
       * Format: date-time
       * @description The date the user was created.
       */
      createdAt?: string;
      /**
       * Format: date-time
       * @description The date the user was updated.
       */
      updatedAt?: string;
    };
    /**
     * @example {
     *   "id": "637a5729124f04fe645a8199"
     * }
     */
    UserId: {
      /** @description The auto-generated id of the user */
      id: string;
    };
    User: components["schemas"]["UserId"] &
      components["schemas"]["UserBody"] &
      components["schemas"]["UserMeta"];
  };
}

export interface operations {}

export interface external {}