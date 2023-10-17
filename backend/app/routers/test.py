from fastapi import (
    APIRouter, 
    HTTPException, 
    status, 
    Depends)

from ..config.db import get_db
from ..models import Type
from sqlalchemy.orm import Session


router = APIRouter(
    tags=["Test"]
)

@router.get("/")
def get_home(db: Session=Depends(get_db), response_model=schemas.Article):
    posts = db.query(Type).all()

    if posts.first() is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Nothign found"
        )

    return posts