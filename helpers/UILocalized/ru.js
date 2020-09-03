// @flow

import type { UILocalizedData } from './UILocalizedTypes';

const ru: UILocalizedData = {
    // TON
    TONLabel: 'TON',
    CopyRight: `2018–${(new Date()).getFullYear()} © TON Labs`,
    Disclaimer: 'Disclaimer',

    // Terms
    TermsCookiesPolicy: 'By using this website, you agree to our Cookies Policy.',
    Here: 'здесь',
    LegalNotes: 'Legal Notes',

    // Login
    Login: 'Войти',
    WeNeedYourPhoneNumber: 'Для идентификации нам нужен Ваш\nномер телефона',
    PhoneNumber: 'Номер телефона',
    BankCardNumber: 'Card number',
    TermsButtonText: 'Зарегистрировавшись, Вы соглашаетесь с Условиями использования',
    GetCode: 'Получить код',
    WeHaveSentYouACode: 'Мы отправили Вам код для подтверждения Вашего номера',
    Code: 'Код',
    HaveNotReceivedTheCode: 'Не получили код?',
    InvalidPhoneNumber: 'Недопустимый номер телефона',
    InvalidContractAddress: 'Неверный адрес контракта',
    SmartContractAddress: 'Адрес смарт-контракта',
    CheckingTheCode: 'Код проверяется...',
    InvalidCode: 'Неверный код',
    InvalidFirstName: 'Недопустимое имя',
    InvalidLastName: 'Недопустимая фамилия',
    InvalidUsername: 'Недопустимое имя пользователя',
    InvalidPassword: 'Неверный пароль',
    InvalidEmail: 'Invalid email address',
    InvalidPhone: 'Invalid phone',
    InvalidDate: 'Invalid date',
    InvalidBankCardNumber: 'Invalid card number',
    YouHaveEnteredAnInvalidPhoneNumber: 'Вы ввели неверный номер телефона',
    YouHaveEnteredAnEmptyCodeFor: 'Вы ввели пустой код для',
    YouHaveEnteredAnExpiredCodeFor: 'Вы ввели истекший код для',
    YouHaveEnteredAnInvalidCodeFor: 'Вы ввели неверный код для',
    YouHaveEnteredAnInvalidFirstNameFor: 'Вы ввели недопустимое имя для',
    YouHaveEnteredAnInvalidLastNameFor: 'Вы ввели недопустимую фамилию для',
    YouHaveEnteredAnUnacceptableUsername: 'Вы ввели некорректное имя пользователя',
    YouHaveEnteredAUsernameWhichIsAlreadyTaken: 'Вы ввели имя пользователя, которое уже занято',
    YouHaveEnteredAUsernameWhichIsNotDifferent: 'Вы ввели имя пользователя, которое не отличается от текущего',
    LimitExceededFor: 'Лимит попыток превышен для',
    PleaseTryLater: 'Пожалуйста, попробуйте позже',
    PleaseTryAgain: 'Пожалуйста, попробуйте снова',
    YouCanRequestTheCodeAgain: 'Код можно запросить повторно',
    WhatIsYourName: 'Как вас зовут?',
    CreateAUsername: 'Создайте имя пользователя',
    AddAProfilePicture: 'Добавить изображение профиля',
    StartMessaging: 'Начать общение',
    // Login (Telegram translations)
    Login_PhoneFloodError: 'К сожалению, Вы слишком часто удаляли и пересоздавали аккаунт в последнее время. Пожалуйста, подождите несколько дней, прежде чем регистрироваться снова.',
    Login_PhoneBannedError: 'Ваш номер телефона заблокирован в Telegram.',

    // System
    Warning: 'Предупреждение',
    Error: 'Ошибка',
    Success: 'Успешно',
    Cancel: 'Отмена',
    Done: 'Готово',
    Continue: 'Продолжить',
    Close: 'Закрыть',
    Add: 'Добавить',
    Edit: 'Изменить',
    Delete: 'Удалить',
    Manage: 'Управлять',
    OK: 'OK',
    Create: 'Создать',
    Import: 'Импорт',
    Search: 'Искать',
    NotFound: 'Не найденно',
    Yes: 'Да',
    No: 'Нет',
    Copy: 'Копировать',
    CopyToClipboard: 'Копировать в буфер',
    Select: 'Выбрать',
    SelectAll: 'Выбрать все',
    DeselectAll: 'Отменить выбор',
    TakePhoto: 'Снять фото',
    TakeVideo: 'Снять видео',
    ChooseFromLibrary: 'Выбрать из библиотеки',
    NotDefined: 'Не определено',
    NotChosen: 'Не выбрано',
    Next: 'Далее',
    Prev: 'Назад',
    Upload: 'Загрузить',
    Submit: 'Отправить',
    Download: 'Скачать',
    Update: 'Обновить',
    Value: 'Значение',
    Hide: 'Скрыть',
    Skip: 'Пропустить',
    In: 'через',
    Sec: 'сек.',
    Description: 'Описание',
    Share: 'Скопировать И Поделиться Этой Ссылкой',
    ShareToTalk: 'Your TON wallet address link to allow friends talk and make transactions with you.',
    ShareLink: 'Поделиться ссылкой',
    Report: 'Пожаловаться',
    PleaseDoNotCloseTheApp: 'Пожалуйста, не закрывайте приложение',
    ThisActionCannotBeUndone: 'Это действие не может быть отменено',
    SomethingWentWrong: 'Что-то пошло не так. Пожалуйста, повторите позже.',
    NewVersionIsAvailable: 'Доступна новая верси',
    PleaseUpdate: 'Пожалуйста, обновите',
    ForgotPassword: 'Забыли пароль?',
    LoadMore: 'Загрузить еще',
    YouMustUseThePhoneNumberSpecifiedInTheOffer: 'Вы должны использовать номер телефона, указанный в предложении',
    ConnectionStatus: 'Статус соединения',
    ConnectionHasBeenLost: 'Соединение потеряно',
    SorryWeCannotDoActionAtTheMoment: 'К сожалению, мы не можем {0} в данный момент 😿. Пожалуйста, повторите попытку позже.',
    NumberCopiedToClipboard: 'Номер скопирован в буфер.',
    LinkCopiedToClipboard: 'Ссылка скопирована в буфер.',
    MessageCopiedToClipboard: 'Сообщение скопировано в буфер',
    HashCopiedToClipboard: 'Hash copied to clipboard.',
    FileIsTooBig: 'Извините, мы не можем это обработать. Файл слишком большой (лимит: {0} MB).',
    Important: 'ВАЖНО!',
    UserIsNotAuthorized: 'Пользователь не авторизован',
    WalletIsNotInitialized: 'Кошелек не инициализирован',
    WeAreSorryButYourBrowserVersionIsNotCompatible: 'Извините, но ваша версия браузера несовместима с нашим приложением.\nВместо этого используйте любой современный браузер (Chrome, Safari, Edge, Firefox и др.).',
    PleaseGoOnline: 'Пожалуйста, выйдите в онлайн',

    // Profile
    Profile: 'Профиль',
    EditProfile: 'Изменить профиль',
    LogOut: 'Выйти',
    Name: 'Имя',
    GivenNames: 'Имя',
    Surname: 'Фамилия',
    Details: 'Детали',
    Username: 'Имя пользователя',
    UploadAvatar: 'Загрузить фото',
    DoYouWantToLogOut: 'Вы хотите разлогиниться?',
    Addresses: 'Адреса',
    BackupAccount: 'Резервная копия аккаунта',

    EnterYouNameAndProfilePicture: 'Укажите имя и, если хотите, добавьте фотографию для Вашего профиля.',
    AnyDetailsSuchAsAge: 'Любые подробности, например: возраст, род занятий или город.\nПример: 23 года, дизайнер из Санкт-Петербурга.',
    YourUsername: 'Ваше имя пользователя',
    UpdateUsername: 'Обновить имя пользователя',
    EditUsernameInstructions: 'Вы можете выбрать публичное имя пользователя в Telegram. В этом случае жругие люди смогут натйти Вас по такому имени и связаться с Вами, не зная Вашего телефона.\n\nВы можете использовать латинские буквы (a–z), цифры (0–9) и символы подчеркивания. Минимальная длина - 5 символов.',
    ThisLinkOpensChat: 'По этой ссылке откроется чат с Вами',

    TelegramCall: 'Звонок в телеграм',
    PhoneCall: 'Звонок по телефону',
    WeWillSendAnSMSWithConfirmationCode: 'Мы отправим SMS c кодом подтверждения на Ваш новый номер',

    ChangeNumber: 'Изменить номер',
    CopyNumber: 'Скопировать номер',
    EnterYourNewPhoneNumber: 'Введите Ваш новый номер телефона',
    EditPhoneNumberInstructions: 'Здесь Вы можете сменить номер телефона. Ваш аккаунт и все данные (сообщения, медиа, контакты и т.д.) будут перенесены на новый номер.\n\nВажно: Ваш новый номер будет автоматически добавлен в телефонную книгу Вашим контактам в Telegram, если у них был старый номер, и Вы не заблокировали их.',

    FromCamera: 'С Камеры',
    FromGallery: 'Из Галлереи',
    DeletePhoto: 'Удалить фото',

    Bio: 'Детали',
    SendMessage: 'Отправить сообщение',
    BlockUser: 'Заблокировать пользователя',

    NumberOccupied: 'Номер занят',
    NumberIsAlreadyConnectedToATelegramAccount: 'Номер {0} уже привязан к аккаунту Telegram. Удалите тот аккаунт, прежде чем перейти на новый номер.',

    // Contacts
    Info: 'Информация',
    SearchContacts: 'Поиск по контактам...',
    SearchFriends: 'Поиск друзей...',
    InviteFriends: 'Пригласить',
    Contacts: 'Контакты',
    Friends: 'Друзья',
    NewContact: 'Новый контакт',
    FirstName: 'Имя',
    MiddleName: 'Среднее имя',
    LastName: 'Фамилия',
    AddContact: 'Добавить Контакт',

    Online: 'в сети',
    Recently: 'был(а) недавно',
    LastWeek: 'был(а) на этой неделе',
    LastMonth: 'был(а) в этом месяце',
    ForALongTime: 'был(а) очень давно',
    Was: 'был(а)',

    FailedToAddNewContact: 'Не удалось добавить новый контакт.',
    ContactsPermissionHasNotBeenGranted: 'Разрешение на использование контактов не предоставлено.',
    AddingContactIsNotATelegramUser: 'Указанный вами телефон пока не зарегистрирован в Telegram.\n\nВы сможете общаться с этим контактом сразу, как только он зарегистрируется в Telegram.',
    RequestingContactsPermission: 'Доступ к контактам закрыт',
    WeUseContactsToAllowYouToInviteFriends: 'Мы используем контакты для приглашения друзей',
    ContactsAccessDenied: 'Доступ к контактам запрещен',
    ContactsGrantAccess: 'Вы можете разрешить доступ к вашим контактам в настройках.',
    OpenSettings: 'Открыть настройки',
    Recent: 'Последние',

    // Messenger
    Today: 'Сегодня',
    Yesterday: 'Вчера',
    NewMessage: 'Написать сообщение',
    NewGroup: 'Создать группу',
    CreateChannel: 'Создать канал',
    DiscoverBots: 'Обнаружить ботов',
    Members: 'Участники',
    WhomWouldYouLikeToMessage: 'Кому бы Вы хотели написать?',
    AddMembers: 'Добавить участников',
    AddSubscribers: 'Добавить подписчиков',
    AddAdministrator: 'Добавить администратора',
    GroupName: 'Название группы',
    Group: 'Группа',
    You: 'Вы',
    Member01: 'участник', // 01 member
    Member11: 'участник', // 21 members
    Member24: 'участника', // 22,23,24 members
    Member50: 'участников', // 25,26,27,28,29,30 members
    NewRecord: 'Новая',
    NewChannel: 'Новый',
    ChannelName: 'Название канала',
    YouCanProvideAnOptionalDescriptionForYourChannel: 'Можете указать дополнительное описание для Вашего канала.',
    Channel: 'Канал',
    Public: 'Публичный',
    Private: 'Частный',
    PrivateChannelsCanOnlyBeJoinedViaAnInviteLink: 'На частные каналы можно подписаться только по ссылке-приглашению',
    PeopleCanJoinYourChannelByFollowingThisLink: 'На Ваш канал можно будет подписаться, перейдя по этой ссылке. Вы можете сбросить эту ссылку в любое время',
    PublicChannelsCanBeFoundInSearchAnyoneCanJoinThem: 'Публичные каналы можно найти через поиск, подписаться на них может любой пользователь.',
    PeopleCanShareThisLinkWithOtherAndFindYourChannel: 'Люди смогут делиться этой ссылкой с другими и находить ваш канал через поиск.',
    WhomWouldYouLikeToAdd: 'Кого бы Вы хотели добавить?',
    UnreadMessages: 'Непрочитанные сообщения',
    SayHello: 'Скажи "Привет"',

    // WalletExporter
    BackupWalletSuggestion: 'Сделайте резервную копию своей учетной записи! Для этого мы представим вам 12 слов. Пожалуйста, запишите их и храните в безопасности! Они будут использоваться для восстановления вашей учетной записи или открытия ее на другом устройстве.',
    BackupWalletTitle: 'Запишите следующие 12 слов.',
    BackupWalletDescription: 'Чтобы получить доступ к приложению TON Wallet на другом устройстве, вам нужно использовать фразу из 12 слов. Нет никакой возможности восстановить эти 12 слов, вы не должны потерять их! Эта фраза НЕ ДОЛЖНА раскрываться никому, кроме вас! Она позволяет иметь доступ к вашей учетной записи, создавать и подписывать документы. Если вы потеряете эту фразу, вы НИКОГДА не сможете получить доступ к своей учетной записи!',
    Word: 'Cлово',
    OutOf: 'из',
    BackupNow: 'Сделать копию сейчас',
    Later: 'Позже',

    WalletSetup: {
        LogoText: 'Самый быстрый способ получить и переслать криптовалюту',
        CreateANew: 'Создать новый',
        Restore: 'Восстановить',
        PrivateKey: 'Приватный ключ',
        PrivateKeyDetails: 'Только с помощью приватного ключа вы сможете получить доступ к вашим деньгам и кошельку.',
        PrivateKeyHint: 'Не стоит сохранять числовой ключ, намного лучше использовать набор слов, построенный на основе числового ключа. Его гораздо проще запомнить.',
        KeyPhrase: 'Ключевая фраза',
        KeyPhrasePlaceholder: 'Ключевая фраза',
        KeyPhraseDetails: 'Запишите эти слова на бумаге и храните её в тайном месте. Она понадобится вам если, упаси бог, вы потеряете ваш кошелек или захотите установить его на другом устройстве.',
        KeyPhraseWarning: 'ВАЖНО! Без этой фразы вы не сможете восстановить доступ к вашему кошельку!',
        KeyPhraseHint: 'Не стоит делать копию экрана с фразой, другие приложения могут получить доступ к ней и использовать в целях получения доступа к вашему кошельку.',
        PhraseCheck: 'Проверка фразы',
        PhraseCheckDetails: 'Поскольку мы нигде не храним ключевую фразу, её хранение полностью на вашей ответственности. Чтобы удостовериться, что вы действительно запомнили ключевую фразу, пожалуйста впишите её в поле ниже, чтобы мы смогли проверить её.',
        PhraseCheckHint: '12 слов.',
        PhraseCheckSuccess: 'Отлично.',
        PhraseCheckAgreement: 'Я понимаю, что в случае, если я забуду или потеряю ключевую фразу, я никогда не смогу получить доступ к моему кошельку.',
        RestoreWallet: 'Восстановить кошелек',
        RestoreWalletDetails: 'Впишите ключевую фразу, которую вы получили при создании кошелька.',
        EncodePhrase: 'Получить фразу',
        IHaveWrittenAndRemembered: 'Я записал и запомнил',
        OKContinue: 'Да, дальше',
        Seconds: 'с',
        SetLocalPassword: 'Create Login Method',
        SetLocalPasswordDetails: 'Set a Passcode to enter the wallet and confirm your transactions. It will work only on this device.',
        SetLocalPasswordPlaceholder: 'New Passcode',
        SetLocalPasswordHint: 'Minimum 8 characters.',
        SetLocalPasswordWarning: 'Attention! To access the wallet on another device, you will need a Key Phrase.',
        SetLocalPasswordContinue: 'Continue',
        ConfirmLocalPassword: 'Confirm Login Method',
        ConfirmLocalPasswordDetails: 'Set a Passcode to enter the wallet and confirm your transactions. It will work only on this device.',
        ConfirmLocalPasswordPlaceholder: 'Repeat Passcode',
        ConfirmLocalPasswordHint: '',
        ConfirmLocalPasswordSuccess: 'Success.',
        ConfirmLocalPasswordWarning: 'Attention! To access the wallet on another device, you will need a Key Phrase.',
        ConfirmLocalPasswordContinue: 'OK, let’s go',
    },

    // WalletImporter
    AddWallet: 'В учетной записи TON Wallet используется блокчейн TON для отправки и получения GRAM транзакций.\nПожалуйста, создайте или восстановите Ваш TON Wallet аккаунт здесь.',
    SeedPhrase: 'Фраза из 12 слов',
    ContinueWithPassword: 'Продолжить с паролем',
    CreateNewAccount: 'Создать новый аккаунт',
    RestoreFrom12Words: 'Восстановить из 12 слов',

    // WalletTransferer
    ScanQRCodeWithTONChatApplicationToContinue: 'Пожалуйста, используйте приложение TON Wallet для сканирования этого QR-кода.\nНажмите кнопку сканирования, расположенную в правом верхнем углу главного экрана.',
    WalletQRCodeScannerHint: 'Сканируйте QR-код с веб-приложения TON Wallet, чтобы синхронизировать свою учетную запись.',

    // Chat list
    YouHaveNoConversationsYet: 'У вас пока нет сообщений',

    // Chat
    ChatWith: 'Чат с',
    DoYouWantToBlockThisUser: 'Вы хотите заблокировать этого юзера?',
    TypeMessage: 'Введите сообщение',
    FailedToLoadDocument: 'Failed to load document',

    // Wallet
    WeNeedYourPassword: 'Введите Ваш пароль, чтобы выполнять операции на этом устройстве',
    WeNeedYourPasswordToUpgradeWallet: 'Введите Ваш пароль, чтобы обновить Ваш кошелек',
    Password: 'Пароль',
    MasterPassword: 'Master Password',
    ConfirmPassword: 'Подтвердите пароль',
    WrongPassword: 'Неверный пароль',
    UpgradingWallet: 'Обновление Вашего кошелька...',
    ExportingBackupPhrase: 'Экспорт бэкап-фразы...',
    DecryptingDocument: 'Расшифровка документа...',
    RecoveringDocument: 'Пожалуйста, подождите. Мы восстанавливаем документ. Это может занять некоторое время...',
    SorryYouDoNotHaveAnAccessToThisDocument: 'Извините, у вас нет доступа к этому документу. Вы всегда можете импортировать другой кошелек c помощью бэкап-фразы.',
    moreWords01: 'слово осталось',
    moreWords11: 'слово осталось',
    moreWords24: 'слова осталось',
    moreWords50: 'слов осталось',

    // Username
    Username_InvalidTooShort: 'Имя пользователя должно содержать минимум 5 символов.',
    Username_InvalidStartsWithNumber: 'Имя пользователя не должно начинаться с цифры.',
    Username_InvalidCharacters: 'Такое имя недопустимо.',
    Username_InvalidTaken: 'Это имя уже занято.',
    Username_CheckingUsername: 'Проверка имени…',
    Username_UsernameIsAvailable: 'Имя {0} доступно.',

    // 2FA
    TwoStepAuth_EnterPasswordHelp: 'Вы включили двухэтапную аутентификацию. Теперь ваш аккаунт защищён дополнительным паролем.',
    TwoStepAuth_EnterPasswordInvalid: 'Неверный пароль. Попробуйте ещё раз.',
    TwoStepAuth_RecoveryUnavailable: 'Поскольку Вы не указали резервный адрес электронной почты, Вам остаётся либо вспомнить пароль, либо сбросить аккаунт и начать с чистого листа.',
    TwoStepAuth_RecoveryFailed: 'В этом случае остаётся либо вспомнить пароль, либо сбросить аккаунт и начать с чистого листа.',
    TwoStepAuth_RecoveryCodeHelp: 'Чтобы отключить двухэтапную аутентификацию, введите шестизначный код, отправленный вам по электронной почте.',
    TwoStepAuth_RecoveryEmailUnavailable: 'Нет доступа к {0}?',
    TwoStepAuth_RecoveryCodeExpired: 'Мы отправили Вам новый шестизначный код.',
    TwoStepAuth_InvalidPasswordError: 'Неверный пароль. Пожалуйста, попробуйте снова.',
    TwoStepAuth_FloodError: 'Лимит попыток исчерпан. Попробуйте чуть позже.',

    // Messenger
    Messenger: 'Чаты',
    SearchForMessagesOrUsers: 'Поиск по сообщениям и людям',
    PleaseSelectAChatToStartMessaging: 'Пожалуйста, выберите чат для начала общения',

    // Groups & Channels
    DoYouWantToLeaveChannel: 'Вы хотите покинуть канал?',
    DoYouWantToLeaveGroup: 'Вы хотите покинуть группу? Вы не сможете вернуться в эту группу.',
    DoYouWantToClearHistory: 'Вы хотите очистить историю сообщений?',
    DoYouWantToDeleteChannel: 'Внимание! Если удалить этот канал, все участники и сообщения будут потеряны. Вы точно хотите его удалить?',
    DoYouWantToDeleteGroup: 'Внимание! Удаление этой группы приведёт к исключению всех участников и потере всех сообщений. Вы точно хотите её удалить?',
    LeaveChannel: 'Покинуть канал',
    LeaveGroup: 'Покинуть группу',
    DeleteChannel: 'Удалить канал',
    DeleteGroup: 'Удалить группу',
    ClearHistory: 'Очистить историю',
    Admins: 'Администраторы',
    ChannelInfo: 'Описание канала',
    Administrators: 'Администраторы',
    Administrator: 'Администратор',
    Subscribers: 'Подписчики',
    Blacklist: 'Черный список',
    FailedToLeaveChannel: 'Не удалось покинуть канал',
    FailedToLeaveGroup: 'Не удалось покинуть группу',
    RevokeLink: 'Аннулировать ссылку',
    ConvertToSupergroup: 'Сделать супергруппой',
    ConvertToSupergroupDetails: 'В супергруппах:\n• Новые участники могут видеть всю историю сообщений\n• Удалённые сообщения исчезают для всех участников\n• Администраторы могут закреплять важные сообщения\n• Создатель может выбрать для группы публичную ссылку',
    AllMembersAreAdmins: 'Права администратора у всех',
    OnlyAdminsCanAddAndRemoveMembers: 'Только администраторы могут добавлять и удалять участников, редактировать название и фото группы.',
    AllMembersCanAddAndRemoveMembers: 'Все участники могут добавлять и удалять участников, редактировать название и фото группы.',
    YouCanAddAdministratorsToHelpYouManageYourChannel: 'Вы можете добавить администраторов, чтобы помочь Вам управлять своим каналом. Нажмите и удерживайте, чтобы удалить администратора.',
    Creator: 'Создатель',
    AddedBy: 'Назначил(а) {0}',
    GroupPhotoUpdated: 'изменил(а) фото группы.',

    // Wallet
    Wallet: 'Кошелек',
    PublicAddress: 'Публичный адрес',
    SearchForTransactions: 'Поиск по транзакциям...',
    YouHaveNoTransactionsYet: 'У вас пока нет транзакций',
    Recipient: 'Получатель',
    Recipients: 'Получатели',
    SearchForRecipients: 'Поиск по получателям...',
    TotalBalance: 'Общий Баланс',
    Transaction: 'Транзакция',
    Sender: 'Отправитель',
    FailedToCreateWallet: 'Не удалось создать кошелек',
    FailedToCreateNewAccount: 'Не удалось создать новый аккаунт',
    FailedToSendTransaction: 'Не удалось отправить транзакцию',
    FailedToSetLimit: 'Не удалось установить лимит',
    BackupWallet: 'Резервная копия кошелька',
    Amount: 'Сумма',
    Date: 'Дата',
    Balance: 'Баланс',
    Gram: 'ГРАМ',
    gram: 'Gram',
    Send: 'Отправить',
    UserHasNoWallet: 'У этого пользователя кошелёк ещё не создан, но мы вышлем ему ссылку, чтобы он смог его создать и получить данный перевод.',
    TransactionFrom: 'You have received a transaction from',
    InvitesYouToWallet: 'Invites you to join TONWallet and receive a transaction.',
    Transactions: 'Транзакции',

    // Accounts
    Account: 'Аккаунт',
    Accounts: 'Аккаунты',
    MyMainAccount: 'Мой Главный Аккаунт',
    MyAccount: 'Мой Аккаунт',
    Limits: 'Лимиты',
    SingleOperationLimit: 'Лимит на одну операцию',
    PublicAccount: 'Публичный аккаунт',
    AccountTypeHint: 'Делая адрес аккаунта публичным, Вы разрешаете показывать его у Вас в Профиле.',
    PublicAccountWarning: 'Внимание! Если вы предоставите публичный адрес третьим лицам, он будет доступен им даже после того, как вы сделаете его приватным.',
    MakePublic: 'Сделать публичным',
    NoThankYou: 'Нет, спасибо',
    AddNewLimit: 'Добавить новый',
    NewLimit: 'Новый лимит',
    EditLimit: 'Изменить лимит',
    NewAccount: 'Новый аккаунт',
    Period: 'Период',
    UplimitRule: 'Принцип защиты',
    DoYouWantToDeleteLimit: 'Вы хотите удалить лимит?',
    AccountLimitPeriod: {
        daily: 'Ежедневно',
        weekly: 'Еженедельно',
        monthly: 'Ежемесячно',
        total: 'Всего',
    },
    AccountLimitRule: {
        passportVerification: 'Подтверждение паспорта',
        twoFactorAuthentication: 'Двухфакторная авторизация',
    },
    AccountAddress: 'Адрес',
    AddressURLHint: 'По этому адресу ваши друзья могут пополнить ваш кошелёк.',
    AddressShare: 'Поделиться',
    Request: 'Запросить',

    // Passport
    ViewPassport: 'Посмотреть паспорт',
    PassportNeedsAttention: [
        'Please add all your personal information to your passport',
        'Please add all your personal information and an official document to your passport',
        'Passport validation is required',
    ],
    AtTime: 'в',
    Passport: 'Паспорт',
    Status: 'Статус',
    ReviewAndConfirm: 'Проверить и подтвердить',
    PassportRequestReview: 'Your documents are being verified now. We will get back to you within 2 business hours',
    PassportFetchingStatus: 'Получение статуса...',
    PassportStatus: [
        'None',
        'Bad',
        'Suspicious',
        'Unknown',
        'Pending',
        'Trusted',
    ],
    PassportSaveSuccess: 'Ваш паспорт был обновлен',
    PassportSaveError: 'Произошла ошибка при обновлении паспорта',
    DeleteDocument: 'Удалить документ',
    DeleteDocumentMessage: 'Вы хотите удалить этот документ из Вашего паспорта?',
    DocumentDeleteDataAndFiles: 'Удалить данные и файлы',
    Information: 'Информация',
    Confirmed: 'Подтвержденный',
    Unconfirmed: 'Неподтвержденный',
    PersonalDetails: 'Персональные данные',
    IdentityDocument: 'Удостоверение личности',
    FillInInformation: 'Заполните требуемую информацию ниже',
    FillInPersonalDetails: 'Заполните Ваши личные данные',
    UploadAScan: 'Загрузите скан Вашего паспорта или другого удостоверения личности',
    DoB: 'Дата рождения',
    DoBMin: 'Должен быть старше',
    DoBMax: 'Должен быть младше',
    Gender: 'Пол',
    Citizenship: 'Гражданство',
    Residence: 'Страна проживания',
    SelectResidence: 'Выберите страну проживания…',
    SelectCountry: 'Select country…',
    Country: 'Country',
    Address: 'Адрес',
    Apartment: 'Apt / Ste / Unit',
    City: 'Город',
    State: 'Регион',
    PostalCode: 'Почтовый индекс',
    Male: 'Мужчина',
    Female: 'Женщина',
    RequestedFiles: 'Запрашиваемые файлы',
    IdentificationDocument: 'Идентификационный Документ',
    IdentityCard: 'Удостоверение личности',
    DriversLicense: 'Водительские права',
    InternalPassport: 'Внутренний паспорт',
    ResidencePermit: 'Residence Permit',
    AddPassport: 'Добавьте паспорт',
    AddIdentityCard: 'Добавьте удостоверение личности',
    AddDriversLicense: 'Добавьте водительские права',
    AddInternalPassport: 'Добавьте внутренний паспорт',
    AddResidencePermit: 'Add Residence Permit',
    EditPassport: 'Измените данные паспорта',
    EditIdentityCard: 'Измените данные удостоверения личности',
    EditDriversLicense: 'Измените данные водительских прав',
    EditInternalPassport: 'Измените данные внутреннего паспорта',
    EditResidencePermit: 'Edit Residence Permit',
    DocumentNumber: 'Номер Документа',
    DocumentExpiration: 'Дата истечения срока действия',
    DocumentFront: 'Лицевая сторона',
    DocumentReverse: 'Обратная сторона',
    DocumentSelfie: 'Ваше фото с документом',
    DocumentFrontDescription: 'Загрузите фотографию лицевой стороны документа',
    DocumentReverseDescription: 'Загрузите фотографию обратной стороны документа',
    DocumentSelfieDescription: 'Загрузите фотографию, где Вы держите документ',
    SelfieWithPassportOrID: 'Ваша фотография с паспортом или удостоверением личности',
    DocumentRequirements: 'Документ должен содержать вашу фотографию, имя и фамилию, дату рождения, номер документа, страну выпуска и дату истечения срока действия.',

    PublicAddressCopiedToClipboard: 'Адрес аккаунта скопирован в буфер.',
    Tokens: 'Токены',
    Currencies: 'Валюты',
    Events: 'События',
    Pay: 'Заплатить',

    // Tokens
    TON: 'TON',
    Ethereum: 'Эфириум',
    Binance: 'Бинанс',

    // Transactions
    Exchange: 'Обмен',
    ChooseDepositToken: 'Выбрать токен для обмена',
    ExchangeFrom: 'С',
    ExchangeTo: 'На',
    WriteOffAccount: 'Счет списания',
    SearchByToken: 'Поиск по Токенам...',
    SearchByAccount: 'Поиск по Аккаунтам...',
    Deposit: 'Обмен',
    max: 'макс.',
    Receive: 'Получить',
    ConfirmAndTransfer: 'Подтвердить & Перевести',
    YourTransactionCouldNotBeCompleted: 'Ваша транзакция не может быть завершена',
    YourTransactionCompleted: 'Ваша транзакция завершена',
    ViewOnEtherscan: 'Ссылка на транзакцию в Etherscan',
    TransactionStatus: {
        rejected: 'Rejected at {0}',
        aborted: 'Aborted at {0}',
        sending: 'Pending...',
    },
    message: {
        sending: 'Pending...',
    },
    fee: 'Fees',
    feeAmount: '≈ {0}',
    operationTime: 'Operation time',
    immediately: 'Immediately',

    ConfirmIdentity: 'Чтобы продолжить, нам необходимо подтвердить вашу личность, отправив SMS-код на ваш номер телефона',
    SMSNotice: 'Может взиматься плата за SMS',

    // Limits
    TransactionError: [
        '-',
        'Превышен лимит операции',
        'Доступ запрещен',
        'Неизвестная ошибка',
    ],
    LimitSetSuccess: 'Лимит был успешно установлен.',
    LimitRemoveSuccess: 'Лимит был удален',

    Gram01: 'Gram', // 01 gram
    Gram11: 'Grams', // 21 grams
    Gram24: 'Grams', // 22,23,24 grams
    Gram50: 'Grams', // 25,26,27,28,29,30 grams

    // Dates
    DateSymbols: { year: 'ГГГГ', month: 'ММ', day: 'ДД' },

    // Stub page
    GetNotifiedWhenWeLaunch: 'Get notified when we launch',
    WillGetInTouchWithYouSoon: 'Will get in touch with you soon.',
    ThanksForCooperation: 'Thanks for cooperation.',
    Contact: 'For more information, contact',
    PressEmail: 'press@tonlabs.io',

    // Toasts
    EnterCorrectDataToField: 'Enter correct data to field',

    // Labels
    Phone: 'Phone',
    EmailAddress: 'Email',

    // Feedback module
    ThanksForYourFeedback: 'Thanks for your feedback',
    DescribeYourIssueOrIdea: 'Describe your issue or idea',
    YourEmail: 'Your email',
    SendFeedback: 'Send feedback',
    PushFeedbackShort: 'Give feedback to contribute to the story',
    PushFeedbackLong: 'Give your feedback to help us make the story better. Click here to share.',

    // Seed Phrase Input:
    seedPhraseTypo: 'Seems we have a typo here, try again', // TODO: Translate
    greatMemory: 'Great memory!', // TODO: Translate

    // Cross-services
    WeCanTFindThePageYouReLookingFor: 'We can\'t find the page you\'re looking for.',
    TheRequestedServiceIsDownToGetUpAsapTryAgainLater: 'The requested service is down to get up ASAP. Try again later.',
    WelcomeTo000: 'Welcome to 000',
    BackToHome: 'Back to Home',
    serviceUnavailable: 'Service unavailable',

    // Common
    // Time
    hours: 'hours',
    minutes: 'minutes',
    hours01: 'hour',
    hours11: 'hours',
    hours24: 'hours',
    hours50: 'hours',
    minutes01: 'minute',
    minutes11: 'minutes',
    minutes24: 'minutes',
    minutes50: 'minutes',
};

export default ru;
