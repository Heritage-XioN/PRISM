from datetime import datetime

from sqlalchemy import TIMESTAMP, Column, Integer, String, text
from sqlmodel import Field, SQLModel


# user base class
class UserBase(SQLModel):
    first_name: str
    last_name: str
    email: str


# class for user database table
class Users(UserBase, table=True):
    id: int | None = Field(
        default=None, sa_column=Column(Integer, index=True, primary_key=True)
    )
    first_name: str = Field(sa_column=Column(String, nullable=False))
    last_name: str = Field(sa_column=Column(String, nullable=False))
    email: str = Field(sa_column=Column(String, nullable=False, unique=True))
    roles: str = Field(
        default="user",
        sa_column=Column(String, server_default=text("'user'"), nullable=False),
    )
    password: str = Field(sa_column=Column(String, nullable=False))
    avatar: str | None = Field(
        default=None,
        sa_column=Column(String, server_default=text("'not set'"), nullable=False),
    )
    created_at: datetime | None = Field(
        default=None,
        sa_column=Column(
            TIMESTAMP(timezone=True), server_default=text("now()"), nullable=False
        ),
    )
    updated_at: datetime | None = Field(
        default=None,
        sa_column=Column(
            TIMESTAMP(timezone=True), server_default=text("now()"), nullable=False
        ),
    )
