export interface LoginRequestModel {
  username: string;
  password: string;
}

export interface LoginResponseSuccessModel {
  authToken: string;
  username: string;
  dataSource: string;
  availableDataSources: string[];
}

export interface NameTypeModel {
  name: string;
  type: string;
}

export interface LoginResponseFailedModel {
  message: string;
  translatableMessage: {
    key: string;
    variables: {
      MESSAGE: string;
    };
  };
  statusCode: number | null;
  expected: NameTypeModel[];
  type: 'INVALID_CREDENTIALS';
}
