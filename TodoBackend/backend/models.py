from django.db import models

# Create your models here.

class Todo(models.Model):

    task = models.CharField(max_length = 250, )
    complete = models.BooleanField(default = False, )

    def __str__(self):
        return f'{self.task}, {'complete' if self.complete else 'pending'}'
