export type dataTypes = {
    gameList: GameType[];
}

export type GameProvider = 
    | "playTech"
    | "SkyWind Group"
    | "Pragmatic Play"
    | "Every Matrix"
    | "Evolution"
    | "Expanse"
    | "Ezugi"
    | "GameArt";

export type GameType = {
    title: string;
    url: string;
    favorite: boolean;
    gameProvider: GameProvider;
}



export const data: dataTypes = {
    gameList: [
        {
            title: "Sugar Rush",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f76c/26f0/f87d86737579f23495c713ff46b6646b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ofq6XGSYfEllbgOUDuRQQhVb87pmfKGHjP2DTe0AeLYwq84nzqbEKoIAX5fSbPy40ZhKV3UJhtO3Uqp71T4TIm0palO6AwzJkwWdRSZ3eXouTRwHSjCBS1fOdrYri7emtA9i21GD-Y6-p-jczUofwdBZ1vq7hfsL37JK8i4crZUdHhAX6rsKY65Vyunf1TtfJ4OIQy1pJGZ1uaHvLQyDxp~lrsX-dfPr3GJOVrQguuXt8vn~z7qPyOvFBaa5veK6cEw8FptwDc4xWIIRU-Z~zc9IdYTAT0TdAy1w1r5LCrK1RmsXQxXce4oJN~nRGblCjMPxLz6XOnGJYs7Jc--Tag__",
            gameProvider: "Pragmatic Play"
        },
        {
            title: "Shrolin Crew",
            favorite: true,
            url: "https://s3-alpha-sig.figma.com/img/b81a/6736/e6e59d2dc70c4bcc83e4572cd6796551?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrrjCT1z7O~hXXcMR1IPtZ-TyNpy~UV14RtlDiQhjxXUQUxBl4uH414hKoAianJcaNqxRLGfmvM~RoCLnHg5BytYvXGYhCpY~5PbMv9ziTFKuYpwiULSnG4EELvO-gWNWjv0lk7qdtzgijtmFgoQeVjH5qSp6VIn8ch6-jv2652preBMdNmwgRLWbd9sKwdZzEu2v6OLji7MB0PyUEhbCUBQ1~HzaVDdSY0CCPZ847~3-vb2PziXmjp8W0GfZwqtrBBXCXalh2CSp32QSsOhjWUUPsLTSEn47bAyFUIUuqyC~ADPWtvoYb72jQ9g3KG2zoistquUd2pdPDbFJNtt5w__",
            gameProvider: "Expanse"
        },
        {
            title: "Big Bad Wolf",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f527/9f8e/b0aa093c55b0e6ad7c104dcf1c909678?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmApCROR32H3mBgIXd9PJeV0BdkOlP-FqcSuRvH~OU2tMGDdEwMLSmQa0wcaAipZ5VDb6af2XBfQ4AyLavnjZVs~BriztNnVVTk0bYjJ7nOexPbAoxXjSoKNVJmUcjBPHGH9oEWHCh3xyQr2QeoMd30MFuBr43bjU0E~0jF1Bja8Hdv7qdEenibuIl1kveIybqVwen2oGkPnBdZD2kA3jf0uOToa0vli~yCv~adAZ84rjUeRyS9fUWeVgntrcf2W3j1umky-9FJPtjA5-SODWqx~kkKE81R8qvydrJOyu3r31ehUdvlkWKkQb3EdfoMeIV1BmlAtm7sTXDI9pJIXIA__",
            gameProvider: "playTech"
        },
        {
            title: "Book of Egypt",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/1134/d3a9/a7cded82bd00720e16cfd3aa34af2cd9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G04x9YhomGoh4JN-84zj-aQwGhRfgfuaUro6-XIQ5qSCiHttxFr3DWPQnN1UImuIt6Lg6hIeGxUIGWe7MDqTXgzLUZKyTCSSvclWWZ6ot3usf7QpCvgOb7EoMLQNsWIiGajmuEJd~XBTN4oaCwucb-ZwObnh6yktoN3flVudf9kT4FsGzUe4yCXCykMh6Q4ToJHIWkrgpejzcXg7PUxLanL3v2ovd1UbgaZrQf7upy7saf7R-MZ9nk0nK-S540VFDAwcCo6qnh66HRt3avruZpZp6QJ44ZdDOu~VQd9sh7m5EDJefF7SZbpHsUnnswW-oZX-PCPauRpAhnJlPWAWOA__",
            gameProvider: "Expanse"
        },
        {
            title: "Pirates Power",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/4e09/5048/244b12031799c25318a09a6bc12208a0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPwD6AlX6MR~Hj0ICweXs~SAO0rowvNL0KzaPpTwzSmAHZxSbvG4V2DmIQzzA-XzFAKW-StuTKprvMSN9HX8v5C0bAJNTTS37~p8pjfJ6BSyBiOWbhFdx7~0wbap4qGFQjcAqERdDBmzwK8R7htoOUjcuy~Lhl0iX6EVaZ3Y7q2CR8xIJenxo90PWbhPrMJ25PuZ9o1RuBpC-Secj0WvWRRdS2OQ~WDCraEUV6uro5QXQsSuZxE90Pe2kYU1wjQ9VM516j3T9LM7z2MbDvYBCJzqCQkVKBWlXQPWa-xrwW~XZnmenTgOfxn8FUOxiGdqrt16impdpy8XXJFA6Y~ERg__",
            gameProvider: "Expanse"
        },
        {
            title: "Crocodile Blitz",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/e52c/b553/8577a76420a441f020f285da17038e22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmPMxPwZcC~Q4yyOsfWlwP9qj8CWRIQw1wNWGtzt2eiRsGkgkXuf8pLoeqX5hm0lTpG3eFmlj5pWootg6hrr7Eg5IOJFrHEMb7lIDwwIV37WijvOkk98ISusZWWIP5454eJDpyccs~T-~8IeJQlPHrRkIOQdNnnYe-pOcSYFMiNxnr2iYHrs3BRI8Sb~cHgeK4AsGlvsvHnNVmU2ZCLpw3i~PRfAiqFYP6UFGlV3~d9quvWS9DZCHmab7fKO0pYvoEkfiamFUtLC9nx4W8DkwFJ4yZPPth~UieRv5WEwpqOKMXhTE9iQdLndvFU8Y89ebtXZ4LYYd5quc33y-2~b~w__",
            gameProvider: "playTech"
        },
        {
            title: "Anaconda Wild 2 Powerplay Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/af91/ac86/2201b4340247c159e95931a9624bdaa8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ELS42OwmbQ9CfzgFxH189TI6pb8SZw68nuBH1mWq18uVnHAjuAos4kWfxnHX9VoAinhYDaYRDf7P-7~JeMlcK45YmeNwCKg7o5XdMPDvoJBSZLuNFHk3LC8zRZzEMPsjmnsDBNkoXgGGmmVLp-eyZpbExtvuTF52ECxKrbpVtmzIIMDBS8CF8K642mhGmP64tnNyi~mnLDc4QyEVnyvH07ROi4y-qCEahgh8Zb9xEaWIO-Dvhonjw9lPW0VwVm-pLowqzhKZhR14Vv88kESpDc4GssgY3yAXfTwErWgtKk~31ARPdXMzfO1OgOHdKddp9~dkjlOzRN7DeJfJqIGqpA__",
            gameProvider: "playTech"
        },
        {
            title: "Maya Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/f07a/29dd/76c5a89b0e4bedaedb79ccb142b277da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxdImV-HgAQ-I2DVfU2iO7RtGwG0uxh9rrekX6qsXm3E8xzURGB2ZO4Ud9kd2LrHq~CQuQWk~OclcOX4~DYS~W9huofDxfZW4A5tvryjWh8x9cT4cG8uMhSmqwsHoOmZX8p40H002J3Zx-tDZ~EB~G1q6WSASKK2Po4NHhC901b3Z-66LKgAv0qLOUYb41QA34eabX0nQAC4Ly3VKYearGfTzbt0gWeDdmlfwzCEoBhaPnt-EYP-qpKjfIwrcEoUGXRd520BTNnQSIMICUpHOW0jx5-00BdwaU4KZQiV7vSHljDP3mEWUTD-2cnHzCB5PZwQ9vR6KumnnO4hbPfIbA__",
            gameProvider: "SkyWind Group"
        },
        {
            title: "Beach Life",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/ae1d/de5e/4cbe514d7290012d92746d46d0898c0c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W94kpV9tNfOMPjxZcbjjS6VN1m~xAg~Qa7bgGAvMqmiHLbVN1GdvQ0Pe7xClSe40iCvq7xiVOkBMyhR17NnkAyBEH0HNebWRVDEM80Xw35bLdZ1rtkmGNh84HKIPAWBNc8Ox0hJEYh6bwZM9FdA36CU012DfAvtLcbmWJ9HHBkRNYU22LvLF1a5Q7xP1FMFGYl1jZ1LCoM~JZL6yZleLcfJmVJqkUsHrR0ybTKJv8lWafO6LBimTUgcRsjRHrR7UiNDeacs3-tTp1dae5q6W37wbJb3fWI3p74opHzYseTx0H5mxFqq4-P2k0AVI2KMhOpLXwRz62nAAdl6De5v3qQ__",
            gameProvider: "playTech"
        },
        {
            title: "Inca Jackpot",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/e7a8/50ca/5bc266ff0244df61dbf9c741324bf587?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSmIatlv67wg93U3Zs29qkqZKbf5ZJQxp8EK~kxIg2kUtXKYW-yHLbNZGOLnztt317zk0Ii3z3b2pN~cwc1lNSCKetX-hKVxqHndOCEZLP9HRSVNA3JF9bhdJD2SCGvxZtdbbbmAE2LtB4syXzLLgE3kcjEnSDHphob-FnL4fTU4Ykj3~iD6s~-daGE6KVTnvZzOGbon9X4LPBfow2FzMO0OPZm9oxnBPyq6wt5IfAmaVQf2rzZjtfIsEVKa-50tXr0W0tJDU8AdLM0CAZupw55YpXY2l-VDBD6~JLWpz-nbw~HzlmpncPhFXr6LshK-OYeNiEhzSNrVSUYerfAPtw__",
            gameProvider: "SkyWind Group"
        },
        
        {
            title: "Pride of Persia",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/ab8b/8632/27d10987732b3f468fee35df08c78a16?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIpWI4ORc0fcCJQN7sDNT2BoQxn5CrIGVhf9rq3YRwLSB4-kCwOa7XfEC6Ni42ynn0VYUU~PdMDLRVfDMgFNQD5WwSeuFmvAai5t2p3A2rxS7ptNjwcu0lgouT0Wr9ua-ijhjyU21-qKmh3lmBnFe5PD3gdnP3QgVn0qj3-Q2tebIg2P4LPkbyvnJvz5Mi3tde1FrnLEw7~SFuVXAkybFoMeB7z3anJoBquA-~PsWtX8-az4d4vKAwGjjlFB2a2D~6jHxPvCn5B5uv7t2TwilQe45HgfLfZhLLi4LjphXK9TUEU6iWWu83z-9-EQiZ0EgxbxNXZSB-8zdgeDnDz1eA__",
            gameProvider: "playTech"
        },
        {
            title: "Azteca Bonus Lines Power",
            favorite: false,
            url: "https://s3-alpha-sig.figma.com/img/a0b7/5bcd/39d39fe4e6324ca2d2138dc2509853ef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WM14xIBN8~ysl16Ro87A-ZVnuz5Lhur2BdOXOn9mZNJSjQhZeyQ1~joJKiGbIz6xgi0Cn1k1jByYZTT~0gIwIQmlBkQNhoM4DR9Q3yz0M7IYY3oy02tQNo6WTWD0TDuqJzqFWbb6aJJ6Fk3KammvlQK0QTCbPG7CuMwZ9DaNU2D17vIlzMJ-uJRFsatc89Z4MKFhwVwTuElmxbJmf34OiqON6BwxEvys8bueDLBthPqUP36Wk7EpXLS-fEx4CQN9-EJ0tYyL1V8K3-3zIXIoHqfCOAr3ILeb5Dr4E1J7G6bjT31Z3y02SL--3jtglUghqLInVKxw4Vp8T-UGrSrAJw__",
            gameProvider: "playTech"
        },
       
    ]
}
  

export const CarouselImages = {
    backgroundURL: "https://s3-alpha-sig.figma.com/img/9c92/77aa/270977de445b1d1d216031819eb6fd17?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDlN4ih5RH8D0cKhGQUtQCpl-4QPpYrbtNhzKCq5ZxaurebIjkCYI5nfI3Mc0aeExmEWfPOT9tL~sanRa0o9nDMoAzquaad8EP8c9ExKiEzbttJFjC-EA-y8R-5Z4OWhX2ITrHW-aV~FooC4VYudJE0T62iNgqWBm-DQaeACPYfd9damINJLU-kVzBEv6Td8YDRxUgnCtGJrhhoDpXZ~AmPMO0bNhEyt0zF2AfGMAPaJb~O98Xk7KFsu8lMhi32lLOp5Sf~gP6VLzX1bQmmLGQ1ewD7beiOjeYfMTeV1oTa76SL5b~45jLwTsq6VFyfBwbnyg3QfJ9jd3i4kFXoazw__",
    circleLightning: "https://s3-alpha-sig.figma.com/img/2e12/0687/94830a60dea0b10fc11e7f48a24f40e5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OR5FVatdWXK9fLNkxVEUXi6IP6ELX-IqxN9kBKHtuCfmPYsjvqn6uEHXqDMzcNYfSh7wN4tKU3kz2-lnHZqZabU2Rs4Zc2bLcDTP~2b8dqtggsu6QyskjwqlbIkRR2RTgcetZGls4KPqdczpyDkxmO5ci-ieqtEwg3OXWwLpCgMSIM27-xFsYLagym3LG~8s4A64abCOyOn1igUSUafO9nsl8wsmF5FT9ev~NzF~3TPIHbw9wbeNZ1iRMgF6AtLCJf8lbzvMzwvowrMPRzIJwkNwj5cCTxpxi0W4mR9~BX5ut9bH7fsPgRLMzIKmzCSwnsfltT-FLJwcyjYr7fHxWw__",
    character: "https://s3-alpha-sig.figma.com/img/383e/a553/bccba1cbf11a537e34fd80ef6980d62a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dILYQclAaTlB5KToevAU8kxusXzEfUVVOVWYPJyHYvk-vQ5vxLhLFvrSpMBJwU76TEctyotbFHgIfcO7ExUZcdh9pW2ldRQSs8gPbgYMSdN0GrVr9gT6H6l6Ddq0YBst1K3fQEpFSzvKM9AGkzfjhRI6HdQEmE3tmXBaSCEDzGhN~xkNHQIasnowe9nfAfFliIwNQyAcoRU24wb2AIfPKoycE5RqfQ3ciSpkbVyZWbvEjWHdRlI95YYYatV-Cxl0-QF2R6ea4nlvrPvwNd80mYT6GOelpVE5LtuOryuTVjUhUqlEdv0I69GVuHfGsS6B~o1DhAWqMeZODy7VQLkf6g__",
    coins: "https://s3-alpha-sig.figma.com/img/b080/c53d/bd85b5eae2f2da8df6e9805892cc8a89?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAuuPx5qmbK8MzO4CZ7zmng-m18J6xdz-NRz0Qk7n0kJ~J9wNmxyLEtvQhvNlNodsIrHC8cjDeVFNARfgq8xYy4U7ZAghxdJX8HtEqM9Py7iWxMD02JHMVmW34YKdE97yBx70QGxIOf567T36TlEXGJXSGjmjGJLkIDj86hxmry255Xpn6AGnbH7hsOj4ltIuIq-XjQvxxpqK1egwKEQzvLZkMORyoFs7L6fxtv5rjvvllZlAkYbHxT5ZbYmApTqQz8-XtaF3Q5y8vQEV2G6PdShu21OZ69jnHVt7tNRdN8Uzs6Vgnk-rAfPyzJu7KWBhx-UlNZuIZ6kMxDcXcXUKw__",
    castle: "https://s3-alpha-sig.figma.com/img/64ac/a322/24967307c08ebfdc2f88e8ededb28f35?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyS3huUo1~b8IEVSORLe9e0IXJT3V9uSJhGLQsT65cyFDoxJhOrbOgWlnvBsQe0wrfzal9u05lB8MRuGRslFfBMhiPmgXntQvr~PalNCu02uI-6ux4xtGoXBRZHCsVpMebAmXjywDXkpsQ~r3Xn3dntX~9NiQhX-mVZaDRNm2JflytKCpddGzfeqifb5v6EJ7k556eRmSUlXZ35cgT2zD-MHNhCxkzw5U8O8CjY0AMQBhbbqx~80NeuW2WY1V5s3KzmtRtNVeTbcLtJYYfNU3JGx4zJ~fv9rtpE~SfLxQOBsPkz1AtQyOharYiUIW8m1aPxVU5mIimhJ1Txb7XKJtA__",
}