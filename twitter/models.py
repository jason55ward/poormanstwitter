from django.db import models

class Tweet(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=25)
    message = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.name