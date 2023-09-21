export interface AccountSettings {
    title: string;
}

export interface AccountDictionary {
    accountSettings: AccountSettings;
}

export interface HeaderDictionary {
    home: string;
    register: string;
    about: string;
    account: string;
    owners: string;
    payments: string;
}

export interface ModeToggleDictionary {
    light: string;
    dark: string;
    system: string;
}

export interface LoginFormValidationDictionary {
    email: string;
    password: string;
}

export interface LoginFormFieldDictionary {
    label: string;
    placeholder: string;
    description: string;
}

export interface LoginFormDictionary {
    validation: LoginFormValidationDictionary;
    email: LoginFormFieldDictionary;
    password: LoginFormFieldDictionary;
    submit: string;
}

export interface PaymentsTableDictionary {
    date: string
    organization: string
    service: string
    sum: string
}

export interface OwnersTableDictionary {
    owner: string
    type: string
    address: string
    email: string
}

export interface Dictionary {
    account: AccountDictionary;
    header: HeaderDictionary;
    modeToggle: ModeToggleDictionary;
    loginForm: LoginFormDictionary;
    tables: {
        paymentTable: PaymentsTableDictionary,
        owners: OwnersTableDictionary
    }
}
