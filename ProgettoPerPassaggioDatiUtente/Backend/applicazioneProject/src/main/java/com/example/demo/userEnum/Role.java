package com.example.demo.userEnum;

public enum Role {
    JD("java developer"),
    AD("angular developer"),
    JSD("javascript developer");

    private String value;

    private Role(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static Role getByValue(String value) throws Exception {
        for (Role role : values()) {
            if (role.value.equalsIgnoreCase(value)) {
                return role;
            }
            System.out.println();
        }
		throw new Exception("Invalid Role value: "+ value);
       
    }
    public String getDescription() {
        return value;
    }
}
