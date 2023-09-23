export interface AccountSettings {
    title: string;
}

export interface AccountDictionary {
    accountSettings: AccountSettings;
}

export interface SkillsDictionary {
    title: string;
    aboutMe: {
        text: string;
    };
}

export interface HomeDictionary {
    title: string;
    aboutMe: {
        text: string;
    };
}

export interface HeaderDictionary {
    home: string;
    skills: string;
    about: string;
    portfolio: string;
    sale: string;
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
    date: string;
    organization: string;
    service: string;
    sum: string;
}

export interface OwnersTableDictionary {
    owner: string;
    type: string;
    address: string;
    email: string;
}

export interface SaleDictionary {
    title: string;
}

export interface PortfolioDictionary {
    title: string;
    description: string;
}

export interface Dictionary {
    account: AccountDictionary;
    header: HeaderDictionary;
    skills: SkillsDictionary;
    portfolio: PortfolioDictionary;
    modeToggle: ModeToggleDictionary;
    loginForm: LoginFormDictionary;
    sale: SaleDictionary;
    tables: {
        paymentTable: PaymentsTableDictionary;
        owners: OwnersTableDictionary;
    };
    home: HomeDictionary;
}
